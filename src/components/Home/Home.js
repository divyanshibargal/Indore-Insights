import React from 'react'
import "./Homestyle.css";
import Navbar from '../Navbar/Navbar'
import bg5 from "../images/bg5.png";
import logo1 from '../images/logo1.png'
// import gandhihall from "./gandhihall.jpg";
// import Laalbagh from "./Laalbagh.jpg";


export default function Home() {
  return (
    <>
      <Navbar logo ={logo1}/>
      <div className='image'>
        <img src={bg5} className='image' alt='...'/>
        </div>
      <div className='title'>
        <h1>INDORE INSIGHTS</h1>
        <p>Your Ultimate Travel Companion</p>
        <a href='/about ' className='show' role='button'>
          Explore Now
        </a>
      </div>
      
    </>
  )
}
