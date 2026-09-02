import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="profil_photo" />

      <h1>
        <span>I'm Leena,</span> a web developer based in France
      </h1>

      <p>
        I am a web developer based in France, specializing in front-end development and WordPress, with 5 years of experience.
      </p>

      <div className="hero-action">
        <a href="#contact" className="hero-connect">
          Connect with me
        </a>

        <div className="hero-resume">
          My resume
        </div>
      </div>
    </div>
  )
}

export default Hero
