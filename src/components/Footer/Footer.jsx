import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-left">
<img src={assets.logo} alt="" />
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae doloribus expedita blanditiis tempora ducimus dolores. Ipsam vel illo maxime. Praesentium!</p>
        </div>
        <div className="footer-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
        </div>
        <div className="footer-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>

            </ul>

        </div>
        <div className="footer-right">
<h2>Get In Touch</h2>
<ul>
    <li>+1-222-444-666</li>
    <li>Contact@tomato.com</li>
</ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyrighyt">CopyRight 2024 @ Tomato.com - All Right Reserved</p>
    </div>
  )
}

export default Footer
