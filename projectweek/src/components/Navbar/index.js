import React, { useState } from 'react';
import './navBar.css';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleSidebar() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="navbar">
      <button className="navbar-toggle" onClick={toggleSidebar}>
        ☰
      </button>

 
      <div className="ReadySupport">
    <p> Ready to Support <ToggleSwitch className="toggle" /> </p>
    
    

    </div> 

    
      <ul className="navbar-menu">
     
    

    

     <li className='SupportingNow'>
           <p> Supporting Now</p>
        </li>
       
        <li className='avatar'>
            <img className='avatar' src="https://icons8.com/icon/11730/name" alt="avatar" />
        </li>
        <li className="navbar-menu-icon">
          <img className='mailbox' src="https://icons8.com/icon/63598/envelope" alt="mailbox" />
        </li>
        <li className="navbar-menu-icon">
            <img className='ticket' src="https://icons8.com/icon/3665/ticket" alt="ticket" />
        </li>

        
        <button className="loginbutton">Login</button>
      </ul>

      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <ul className="sidebar-menu">
         <a href="javascript:void(0)" className="closebtn" onClick={toggleSidebar}>&times;</a>
      <li><img src="https://www.schoolofcode.co.uk/static/logo-51c754388b198e5bbb0d08a971ebbfa2.png" alt="SoC Logo" className="sidelogo" /></li>

  
        <li className="sidebar-menu-item">
          <a href="/" className="sidebar-menu-link">
            Dashboard
          </a>
        </li>
        <hr></hr>
        <li className="sidebar-menu-item">
          <a href="/about" className="sidebar-menu-link">
            Support
          </a>
        </li>
        <hr></hr>
        <li className="sidebar-menu-item">
          <a href="/contact" className="sidebar-menu-link">
            Resources
          </a>
        </li>
        <hr></hr>
        <li className="sidebar-menu-item">
          <a href="/" className="sidebar-menu-link">
            People
          </a>
        </li>
        <hr></hr>
        <li className="sidebar-menu-item">
          <a href="/" className="sidebar-menu-link">
            Progress
          </a>
        </li>
      </ul>
      </div>
    </nav>
  );
}

export default Navbar;