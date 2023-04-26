import './App.css';
import React from 'react';
import Navbar from '../NavBar';
import { useState } from 'react';
import HomeNav from '../HomeNav/HomeNav';
import Dashboard from '../Pages';
import Support from '../Pages/Support';
import Resources from '../Pages/Resources';
import People from '../Pages/People';
import Settings from '../Pages/Settings';
import Homepage from '../Pages/Homepage';
import Forum from '../Pages/Forum';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // Function to handle the login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Function to handle the logout
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <Navbar />
    </div>
  );
}

export default App;
