import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.PNG'

const Hero = () => {
  return (
    <div className='hero'>
      <img src={profile_img} alt="profil_photo" />
      <h1><span>I'm Jelena Zeko,</span> frontend developer based in France </h1>
      <p>I am a frontend developer from France with 5 years of experience.</p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero
