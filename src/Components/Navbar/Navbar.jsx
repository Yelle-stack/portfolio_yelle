import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.PNG'
import underline from '../../assets/nav_underline.svg'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {

  const [menu, setMenu] = useState("home");

  return (
    <div className='navbar'>
      <img src={logo} alt="logo_photo" className='logo'/>
      <img src={menu_open} alt="open" className='nav-mob-open'/>

      <ul className="nav-menu">
         <img src={menu_close} alt="close" className="nav-mob-close" />
        <li>
          <a
            href="#home"
            className="anchor-link"
            onClick={() => setMenu("home")}
          >
            Home
          </a>
          {menu === "home" ? <img src={underline} alt="" /> : null}
        </li>

        <li>
          <a
            href="#about"
            className="anchor-link"
            onClick={() => setMenu("about")}
          >
            About Me
          </a>
          {menu === "about" ? <img src={underline} alt="" /> : null}
        </li>

        <li>
          <a
            href="#services"
            className="anchor-link"
            onClick={() => setMenu("services")}
          >
            Services
          </a>
          {menu === "services" ? <img src={underline} alt="" /> : null}
        </li>

        <li>
          <a
            href="#work"
            className="anchor-link"
            onClick={() => setMenu("work")}
          >
            Portfolio
          </a>
          {menu === "work" ? <img src={underline} alt="" /> : null}
        </li>

        <li>
          <a
            href="#contact"
            className="anchor-link"
            onClick={() => setMenu("contact")}
          >
            Contact
          </a>
          {menu === "contact" ? <img src={underline} alt="" /> : null}
        </li>

      </ul>

      <a href="#contact" className="nav-connect">
        Connect With Me
      </a>
    </div>
  )
}

export default Navbar
