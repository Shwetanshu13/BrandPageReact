import React from 'react'
import logo from '/images/brand_logo.png'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='logo'>
            <img src={logo} alt="Brand Logo" />
        </div>
        <ul className='nav-list'>
            <li className='menu'><a href="#">Menu</a></li>
            <li className='location'><a href="#">Location</a></li>
            <li className='about'><a href="#">About</a></li>
            <li className='contact'><a href="#">Contact</a></li>
        </ul>
        <button className='login-btn'>Login</button>
    </nav>
  )
}

export default Navbar