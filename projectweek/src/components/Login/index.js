import React, { useState } from 'react';
import './style.css';
import Navbar from '../Navbar/Navbar';
import officevideo from '../../components/Assets/officevideo.mp4';

const LoginForm = () => {
  const [username, setUsername] = useState('Chris');
  const [password, setPassword] = useState('1234');
  const [loggedIn, setLoggedIn] = useState(false);
  const [popupStyle, setPopupStyle] = useState('hide');

  const handleLogin = (callback) => {
    // perform validation and login logic here
    if (username === 'Chris' && password === '1234') {
      setLoggedIn(true);
      callback(true); // call the callback function with true as argument
    } else {
      setPopupStyle('login-popup');
      setTimeout(() => setPopupStyle('hide'), 3000);
    }
  };

  const handleLoginSuccess = (isLoggedIn) => {
    setLoggedIn(isLoggedIn);
  };

  return (
    <>
      <video
        className="officeVideo"
        src={officevideo}
        type="video/mp4"
        autoPlay
        muted
        loop
      />
      <div className="cover">
        <h1 className="logintitle">Enter Login Details</h1>
        <input
          type="text"
          className="logininput"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="logininput"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <div
          className="login-btn"
          onClick={() => handleLogin(handleLoginSuccess)}
        >
          Login
        </div>
        <div className="signUP">
          <p> If you do not have an account</p>
          <p className="sign"> Sign up</p>
        </div>

        <p className="text"> Or login using</p>
        <div className="alt-login">
          <div className="Google"></div>
          <div className="GitHub"></div>
        </div>
        <div className={popupStyle}>
          <h3>Login Failed</h3>
          <p>Username or password incorrect</p>
        </div>
      </div>
      {loggedIn && <Navbar loggedIn={loggedIn} />}
    </>
  );
};

export default LoginForm;
