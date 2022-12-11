import React, {useState} from 'react'
import { BrowserRouter, Router, Link } from 'react-router-dom';
import './Navbar.scss';
import './_header.scss';
import './_logo.scss'


function Navbar() {
  return (
    <>
    {/* <BrowserRouter> */}
    <header>
    <div className='nav_list'>
    <button class="logo_btn" tabindex="3"><img src={require("./mylogo.png")} alt="my logo" className='logo' /></button>
    <h3 class="touch_logo">click the logo!</h3>
        {/* <Link to="/" className="logo_btn">
        </Link> */}
     <div className="nav_list">
            <ul className='nav_list'>
                <li className="nav-item">
                    {/* <Link to='/' className="nav-links">
                        Home
                    </Link> */}
                    <a href="#home">Home</a>
                </li> 
                <li className="nav-item">
                    {/* <Link to='/services' className="nav-links">
                        Services
                    </Link> */}
                    <a href="#services">Services</a>
                </li>
                <li className="nav-item">
                    {/* <Link to='/competencies' className="nav-links">
                        Competencies
                    </Link> */}
                    <a href="#competencies">Competencies</a>
                </li>
                <li className="nav-item">
                    <a href="#portfolio">Portfolio</a>
                    {/* // <Link to='/work' className="nav-links">
                    //     Work
                    // </Link> */}
                </li> 
                <li className="nav-item">
                    <a href="#contact">Contact</a>
                    {/* <Link to='/contact' className="nav-links">
                        Contact
                    </Link> */}
                </li> 
            </ul>

        </div>
        </div>
      </header>
    </>

  )
}

export default Navbar