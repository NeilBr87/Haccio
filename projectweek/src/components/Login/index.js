import React from 'react'
import './style.css'
import { useState} from 'react'
import officevideo from '../../components/Assets/officevideo.mp4'


const LoginForm = () => {

  // useEffect(() => {
  //   function start() {
  //       gapi.client.init({
  //           clientId: "79474543031-tmjo35916ufn421ej3u1i2ljao2apr4s.apps.googleusercontent.com",
  //           scope: ""
  //       })
  //   }
  //   gapi.load('client: auth2', start)
  // }, []) // added empty dependency array to only call useEffect once

  const [popupStyle, showPopup] = useState("hide")

  const popup = () => {
    showPopup("login-popup")
    setTimeout(() => showPopup("hide"), 3000)
  }

  // const onSuccess = e => {
  //   alert("User signed in")
  //   console.log(e)
  // }

  // const onFailure = e => {
  //   alert("User sign in Failed")
  //   console.log(e)
  // }
  
  return (
    <>
      <video className='officeVideo' src={officevideo} type="video/mp4" autoPlay muted loop/>
      <div className="cover">
      <h1>Login</h1>
      <input type="text" placeholder="Username"/>
      <input type="password" placeholder="Password"/>
      <div className="login-btn" onClick={popup}>Login</div>
      <p className='text'> Or login using</p>

      <div className="alt-login">
        <div className="Google"></div>
        <div className="GitHub"></div>
      </div>
      <div className={popupStyle}>
        <h3>Login Failed</h3>
        <p>Username or password incorrect</p>
      </div>
    </div>
    </>
  )
}

export default LoginForm
