import React from 'react'
import './style.css'
import { useState } from 'react'

const loginForm = () => {

  const [popupStyle,showPopup]= useState(hide)

  const popup = () => {
    showPopup("login-popup")
    setTimeout(() => showPopup("hide"), 3000)

  

  }


  return (
    <div className="cover">
    <h1>Login</h1>
    <input type ="text" placeholder="username"/>
    <input type ="password" placeholder="password"/>
   

    <div className = "login-btn">Login</div>
    
    <p className='text'> Or login using</p>

    <div className="alt-login"> 
      <div className = "Google"></div>
      <div className = "GitHub"></div>
    </div> 
    </div>
  )
}


export default loginForm