import React from 'react';
import PersonalPanel from '../PersonalPanel/PersonalPanel';
// import pages from './pages.css';
// import Profilecard from '../Profilecard';
// import ProgressTrack from '../ProgressTrack1';
// import Sliders from '../Sliders';

function Dashboard() {
  return (
    <div className="pages">
      <h1 className="personalTitle"> Your Dashboard</h1>
      <PersonalPanel />
    </div>
  );
}

export default Dashboard;
