import React, { useState } from 'react'
import "./Navbar.css";
import logo from "../images/logo.png"

export default function Navbar1() {
    const [cName, setCName] = useState("fas fa-bars");
    const handleCName = () => {
        if (cName === "fas fa-bars") {
            setCName("fas fa-times");
            setNName('nav-menu active');
        } else {
            setCName("fas fa-bars");
            setNName("nav-menu");
        }
    }
    const [nName, setNName] = useState("nav-menu");
    // const handlenName = () =>{
    //     if (nName === 'nav-menu') {
    //         setNName('nav-menu active');
    //     } else {
    //         setNName("nav-menu");
    //     }
    // }
    return (
        <>


            <div className="container fixed">
                <nav className='Navbar1'>
                    <img src={logo} alt='logo.png'></img>

                    <div className='menu-icons' onClick={handleCName}>
                        <i className={cName} ></i>
                    </div>
                    <ul className={nName} >
                        <li>
                            <a className='nav-linkss' href="/">Home</a>
                        </li>
                        <li>
                            <a className='nav-linkss' href="/about">About</a>
                        </li>
                        <li>
                            <a className='nav-linkss' href="/explore">Places to visit</a>
                        </li>
                        <li>
                            <a className='nav-linkss' href="/reach">How to reach</a>
                        </li>

                    </ul>
                </nav>

            </div>
        </>
    )
}

