import React, { useState } from 'react'
import "./Navbar.css"
import { assets } from '../../assets/frontend_assets/assets'
import { Link } from 'react-router-dom'

const Navbar = ({setLogin={setLogin}}) => {
    const [menu,setMEnu]= useState('Home')
  return (
    <div className='navbar'>
      <img src={assets.logo}alt=""  className='logo'/>
      <ul className='nav-menu'>
        <Link to="/" onClick={()=>setMEnu("Home")}className={menu==="Home"?"active":""}>Home</Link>
        <a href='#explore-menu' onClick={()=>setMEnu("Menu")}className={menu==="Menu"?"active":""}>Menu</a>
        <a href='#app-download' onClick={()=>setMEnu("MObile-App")}className={menu==="MObile-App"?"active":""}>MObile-App</a>
        <a href='#footer' onClick={()=>setMEnu("Contact-Us")}className={menu==="Contact-Us"?"active":""}>Contact US</a>

      </ul>
      <div className="nav-right">
        <img src={assets.search_icon} alt="" />
        <div className="nav-seach-icon">
            <img src={assets.basket_icon} alt="" />
            <div className="dot"></div>
        </div>
        <button onClick={()=>setLogin(true)} className='nav-button'>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar
