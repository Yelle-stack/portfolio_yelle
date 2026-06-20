import React, { useState } from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {

  const [result, setResult] = useState("")

  // fonction propre pour afficher + cacher le message
  const showResult = (message) => {
    setResult(message)

    setTimeout(() => {
      setResult("")
    }, 3000) // disparaît après 3 secondes
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    setResult("Sending...")

    const formData = new FormData(event.target)

    // clé Web3Forms
    formData.append("access_key", "42b09f65-8006-431d-8fd2-e3d17cdb50ed")

    // reply-to propre
    formData.append("replyto", formData.get("email"))

    const object = Object.fromEntries(formData)
    const json = JSON.stringify(object)

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      })

      const data = await res.json()

      if (data.success) {
        showResult("Message envoyé ✔")
        event.target.reset()
      } else {
        showResult("Erreur lors de l'envoi ❌")
      }

    } catch (error) {
      showResult("Erreur réseau ❌")
    }
  }

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="theme_photo" />
      </div>

      <div className="contact-section">

        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to send me a message.
          </p>

          <div className="contact-details">

            <div className="contact-detail">
              <img src={mail_icon} alt="mail_icon" />
              <p>creation.siteweb@yahoo.com</p>
            </div>

            <div className="contact-detail">
              <img src={call_icon} alt="call_icon" />
              <p>+330-615-375-177</p>
            </div>

            <div className="contact-detail">
              <img src={location_icon} alt="location_icon" />
              <p>France</p>
            </div>

          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">

          <label>Your Name</label>
          <input type="text" name="name" placeholder="Enter your name" required />

          <label>Your Email</label>
          <input type="email" name="email" placeholder="Enter your email" required />

          <label>Your Message</label>
          <textarea name="message" rows="8" placeholder="Enter your message" required></textarea>

          <button type="submit" className="contact-submit">
            Submit now
          </button>

          {/* message statut */}
          <span>{result}</span>

        </form>

      </div>
    </div>
  )
}

export default Contact
