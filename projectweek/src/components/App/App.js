// import Login from '../Login/index';
import './App.css';
import React from 'react';
import Navbar from '../Navbar/Navbar';
// import { useState } from 'react';
import Dashboard from '../Pages/Dashboard';
import Support from '../Pages/Support';
import Resources from '../Pages/Resources';
import People from '../Pages/People';
// import Profilecard from '../Profilecard';
import Settings from '../Pages/Settings';
import Homepage from '../Pages/Homepage';
import Forum from '../Pages/Forum';
import {
  BrowserRouter,
  Routes,
  Route,
  
} from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/support" element={<Support />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/people" element={<People />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/forum" element={<Forum />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
