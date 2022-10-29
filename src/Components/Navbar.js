import React from 'react'
import './navbar.css';
import logoImg from '../images/logo.png';

function Navbar() {
  return (
    <nav className='container'>
        <div className='logo_container'>
          <img src={logoImg} className='logo' alt='zezele logo'></img>
          <p className='logo_title'>ZENZELE</p>
        </div>
        <div className='links'>
          <ul className='links_container'>
            <li><a href='#'>FEATURES</a></li>
            <li><a href='#'>ABOUT US</a></li>
            <li><a href='#'>CAREERS</a></li>
            <li><a href='#'>SIGN UP</a></li>
            <li className='active'><a href='#'>LOG IN</a></li>
          </ul>
        </div>

    </nav>
  )
}

export default Navbar