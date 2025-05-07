import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt=""/>
      <ul>
        <li>Home</li>
        <li>Games</li>
        <li>Hobbies</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar
