import React, { useState, useRef } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.PNG';
import underline from '../../assets/nav_underline.svg';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {

  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
    setIsMenuOpen(false);
  };

  const handleMenuClick = (section) => {
    setMenu(section);
    closeMenu();
  };

  return (
    <div className="navbar">

      <img src={logo} alt="logo" className="logo" />

      {!isMenuOpen && (
        <img
          src={menu_open}
          alt="Open Menu"
          className="nav-mob-open"
          onClick={openMenu}
        />
      )}

      <ul ref={menuRef} className="nav-menu">

        <img
          src={menu_close}
          alt="Close Menu"
          className="nav-mob-close"
          onClick={closeMenu}
        />

        <li>
          <a
            href="#home"
            className="anchor-link"
            onClick={() => handleMenuClick("home")}
          >
            Home
          </a>
          {menu === "home" && <img src={underline} alt="" />}
        </li>

        <li>
          <a
            href="#about"
            className="anchor-link"
            onClick={() => handleMenuClick("about")}
          >
            About Me
          </a>
          {menu === "about" && <img src={underline} alt="" />}
        </li>

        <li>
          <a
            href="#services"
            className="anchor-link"
            onClick={() => handleMenuClick("services")}
          >
            Services
          </a>
          {menu === "services" && <img src={underline} alt="" />}
        </li>

        <li>
          <a
            href="#work"
            className="anchor-link"
            onClick={() => handleMenuClick("work")}
          >
            Portfolio
          </a>
          {menu === "work" && <img src={underline} alt="" />}
        </li>

        <li>
          <a
            href="#contact"
            className="anchor-link"
            onClick={() => handleMenuClick("contact")}
          >
            Contact
          </a>
          {menu === "contact" && <img src={underline} alt="" />}
        </li>

      </ul>

      <a href="#contact" className="nav-connect">
        Connect With Me
      </a>

    </div>
  );
};

export default Navbar;
