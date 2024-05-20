import React from 'react'
import './Footer.css'
import logo from "./images/logo1.png"
export default function Footer() {
  return (
   <>
<div className="footer ">
    <div className="links">
        <img src={logo} alt='...'/>
        <ul>
            <li>Offers & Discounts</li>
            <li>Get Coupon</li>
            <li>Contact Us</li>
            <li>About</li>
        </ul>
    </div>
    <div className="links">
        <h3>New Products</h3>
        <ul>
            <li>Woman Cloth</li>
            <li>Fashion Accessories</li>
            <li>Man Accessories</li>
            <li>Rubber made Toys</li>
        </ul>
    </div>
    <div className="links">
        <h3>Support</h3>
        <ul>
            <li>Frequently Asked Questions</li>
            <li>Report a Payment Issue</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
        </ul>
    </div>
</div>
   
   </>
  )
}
