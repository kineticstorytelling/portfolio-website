import React from 'react'
import './Navbar.scss';
import './_header.scss';
import './_logo.scss'
import '../components/_buttons.scss'


function Navbar() {
  return (
    <>
    <header>
    <button className="logo_btn" tabindex="3"><img src={require("./mylogo.png")} alt="my logo" className='logo' /></button>
    <h3 className="touch_logo">click the logo!</h3>
     <div className="nav_list">
            <ul className='nav_list'>
                <li className="nav-item nav-links">
                    <a href="#home">Home</a>
                </li> 
                <li className="nav-item nav-links">
                    <a href="#services">Services</a>
                </li>
                <li className="nav-item">
                    <a href="#competencies">Competencies</a>
                </li>
                <li className="nav-item">
                    <a href="#portfolio">Portfolio</a>
                </li> 
                <li className="nav-item">
                    <a href="#contact">Contact</a>
                </li> 
            </ul>
        </div>
      </header>
    </>
  )
}

export default Navbar