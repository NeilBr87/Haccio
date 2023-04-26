import React, { useState } from 'react';
import './navBar.css';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import OnlineNow from '../OnlineNow/OnlineNow';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(true);

  function toggleSidebar() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="navbar">
      {loggedIn ? (
        <div id="LoggedIn">
          <button className="navbar-toggle" onClick={toggleSidebar}>
            ☰
          </button>

          <div className="ReadySupport">
            <p>
              Ready to Support <ToggleSwitch className="toggle" />
            </p>
          </div>

          <ul className="navbar-menu">
            <li className="SupportingNow">
              <OnlineNow className="onlineNow" />
              <p> Online Supporting |</p>
            </li>

            <img
              id="navIcon"
              className="mailbox"
              src="https://img.icons8.com/ios/256/new-post.png"
              alt="mailbox"
            />
            <img
              id="navIcon"
              className="ticket"
              src="https://img.icons8.com/ios/256/ticket.png"
              alt="ticket"
            />
            <img
              id="navIcon"
              className="avatar"
              src="https://img.icons8.com/ios/256/name--v1.png"
              alt="avatar"
            />
          </ul>

          <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <ul className="sidebar-menu">
              <a
                href="javascript:void(0)"
                className="closebtn"
                onClick={toggleSidebar}
              >
                &times;
              </a>
              <li>
                <img
                  src="https://www.schoolofcode.co.uk/static/logo-51c754388b198e5bbb0d08a971ebbfa2.png"
                  alt="SoC Logo"
                  className="sidelogo"
                />
              </li>

              <li className="sidebar-menu-item">
                <a href="/dashboard" className="sidebar-menu-link">
                  Dashboard
                </a>
              </li>
              <hr></hr>
              <li className="sidebar-menu-item">
                <a href="/support" className="sidebar-menu-link">
                  Support
                </a>
              </li>
              <hr></hr>
              <li className="sidebar-menu-item">
                <a href="/forum" className="sidebar-menu-link">
                  Forum
                </a>
              </li>
              <hr></hr>
              <li className="sidebar-menu-item">
                <a href="/resources" className="sidebar-menu-link">
                  Resources
                </a>
              </li>
              <hr></hr>
              <li className="sidebar-menu-item">
                <a href="/people" className="sidebar-menu-link">
                  People
                </a>
              </li>
              <hr></hr>
              <li className="sidebar-menu-item">
                <a href="/progress" className="sidebar-menu-link">
                  Progress
                </a>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="loggedOut">
          <img
            clasname="loggedoutImg"
            id="loggedOutnavIcon"
            src="https://www.schoolofcode.co.uk/static/logo-51c754388b198e5bbb0d08a971ebbfa2.png"
            alt="SoC Logo"
            className="logo"
          />
          <button className="register">Register</button>
          <button className="loginbutton"> Login</button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;