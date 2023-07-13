import React, { useState } from 'react';
import './navBar.css';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import OnlineNow from '../OnlineNow/OnlineNow';
import LoginForm from '../Login';

function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(true);
  // const [showLogin, setShowLogin] = useState(false);

  // const handleLoginClick = () => {
  //   setShowLogin(true);
  // };

  // const handleLoginSuccess = (isLoggedIn) => {
  //   setLoggedIn(isLoggedIn);
  //   if (isLoggedIn) {
  //     props.history.push('/dashboard');
  //   }
  // };
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
            <a href="/Support">
              <img
                id="navIcon"
                className="ticket"
                src="https://img.icons8.com/ios/256/ticket.png"
                alt="ticket"
              />
            </a>
            <a href="/dashboard">
              <img
                id="navIcon"
                className="avatar"
                src="https://img.icons8.com/ios/256/name--v1.png"
                alt="avatar"
              />
            </a>
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
          <div className="loggedOutButtons">
            <button className="register">Register</button>
            <button
              className="loginbutton"
              onClick={handleLoginClick}
            >
              Login
            </button>
          </div>
          {showLogin && <LoginForm />}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
