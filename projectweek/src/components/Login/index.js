import React from 'react'
import './style.css'

const loginForm = () => {
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