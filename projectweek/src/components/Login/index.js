import React, { useState } from 'react';
import './style.css';
import Navbar from '../Navbar/Navbar';

const LoginForm = () => {
  const [username, setUsername] = useState('Chris');
  const [password, setPassword] = useState('1234');
  const [loggedIn, setLoggedIn] = useState(false);
  const [popupStyle, setPopupStyle] = useState('hide');

  const handleLogin = () => {
    // perform validation and login logic here
    if (username === 'Chris' && password === '1234') {
      setLoggedIn(true);
    } else {
      setPopupStyle('login-popup');
      setTimeout(() => setPopupStyle('hide'), 3000);
    }
  };

  return (
    <>
      <div className="cover">
        <h1 className="logintitle">Enter Login Details</h1>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="login-btn" onClick={handleLogin}>
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
      {loggedIn && <Navbar />}
    </>
  );
};

export default LoginForm;
