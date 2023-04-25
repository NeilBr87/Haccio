import "./App.css";
import React from "react";
import Dashboard from "../Dashboard";
import Navbar from "../Navbar";
import List from "../Peoplelist";
import Profilecard from "../Profilecard";

function App() {
  return <div>
    {/* <Dashboard /> */}
    <Navbar /> 
    {/* <List /> */}
    <Profilecard />
  </div>;
}

export default App;
