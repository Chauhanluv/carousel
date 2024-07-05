import React from 'react'
import './Header.css'
import banner from '../assets/banner_women.png'

const Header = () => {
  return (
    <div>
      
        <nav class="nav">
            <ul class="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div class="hamburger">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            </div>
        </nav>
        <div className="banner">
          <img src={banner} alt="" />
        </div>
    </div>
  )
}

export default Header
