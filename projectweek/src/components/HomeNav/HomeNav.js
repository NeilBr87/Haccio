import React, { useState } from 'react';
import './HomepageNav.css';
import OnlineNow from '../OnlineNow/OnlineNow';
import Homepage from '../Pages/Homepage';

function HomeNav(props) {
  const handleHomepageClick = () => {
    props.setShowHomepage(true);
  };

  return (
    <>
      <nav className="navbar">
        <ul className="navbar-menu">
          <li className="SupportingNow">
            <OnlineNow className="onlineNow" />
            <p> Online Supporting |</p>
          </li>

          <button className="Register">Register</button>
          <button className="loginbutton">Login</button>
          {/* <button
            className={
              props.activePage === 'Homepage' ? 'selected' : ''
            }
            onClick={handleHomepageClick}
          >
            Homepage
          </button> */}
        </ul>

        <div className="HomePage"></div>
      </nav>
      <div>
        <h1>Testinggg</h1>
      </div>
    </>
  );
}

export default HomeNav;
