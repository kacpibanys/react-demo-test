import React from 'react';
import './Navbar.css';
function Navbar() {
  return (

    <nav className='Navbar'>
      <div className='navbar-logo'>Svvaindigital</div>
      <ul className="navbar-links">
        <li><a href='#'>about us</a></li>
        <li><a href='#'>work</a></li>
        <li><a href='#'>blog</a></li>
        <li><a href='#'><button className="navbar-button">let's talk :)</button></a></li>
      </ul>




    </nav>


  )
}

export default Navbar
