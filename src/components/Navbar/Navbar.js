import React , {useState}from 'react'
import "./Navbarstyle.css";
import logo1 from "../images/logo1.png"

export default function Navbar() {
    const[cName , setCName] = useState("fas fa-bars");
    const handleCName = ()=>{
        if (cName === "fas fa-bars") {
            setCName("fas fa-times");
            setNName('nav-menu active');
        } else {
            setCName("fas fa-bars");
             setNName("nav-menu");
        } 
    }
    const[nName , setNName] =useState("nav-menu");
    // const handlenName = () =>{
    //     if (nName === 'nav-menu') {
    //         setNName('nav-menu active');
    //     } else {
    //         setNName("nav-menu");
    //     }
    // }
    return (
        <>


            <div className="container">
                <nav className='Navbar'>
                  <img src={logo1} alt='logo.png'></img>

                    <div className='menu-icons' onClick={handleCName}>
                       <i className={cName} ></i>
                    </div>
                    <ul className={nName} >
                        <li>
                            <a className='nav-links' href="/">Home</a>
                        </li>
                        <li>
                            <a className='nav-links' href="/Time">Best Time</a>
                        </li>
                        <li>
                            <a className='nav-links' href="/explore">Places to visit</a>
                        </li>
                        <li>
                            <a className='nav-links' href="/reach">How to reach</a>
                        </li>

                    </ul>
                </nav>

            </div>
        </>
    )
}

