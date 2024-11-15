
import React, { useState } from 'react'
import { assets } from '../../assets/frontend_assets/assets'
import "./LoginPopup.css"

const LoginPopup = ({setLogin}) => {
  const[currentstate,setCurrentState] = useState("Sign Up")
  return (
    <div className='login-popup'>
      <form action="" className="login-popup-container">
        <div className="login-title">
          <h2>{currentstate}</h2>
          <img onClick={()=>setLogin(false)}src={assets.cross_icon} alt="" />
        </div>
        <div className="login-input">
          {currentstate==="Login"?<></>:          <input type="text" placeholder='Your Name' required/>
          }
          <input type="text" placeholder='Your Email' required/>
          <input type="password" placeholder='password' required/>
        </div>
        <button>{currentstate==="Sign Up"?"create Account":"Login"}</button>
        <div className="login-condition">
          <input type="checkbox" required />
          <p>By Continuing , i Agree to the terms of use & privacy policy</p>
        </div>
        {currentstate ==="Login"?        <p>Create a new account?<span onClick={()=>setCurrentState("Sign Up")}>Click Here</span></p>:        <p>Already have an acoount?<span onClick={()=>setCurrentState("Login")}>Login here</span></p>

}
      </form>
    </div>
  )
}

export default LoginPopup
