import React, {useState} from 'react'
import { BrowserRouter, Router, Link } from 'react-router-dom';
import './Navbar.scss';
// import './_logo.scss'


// const logo = require('./assets/mylogo.png');

function Navbar() {
  return (
    <>
    {/* <BrowserRouter> */}
    <header>
    <div className='nav_list'>
        
        {/* <Link to="/" className="logo_btn">
        <img src={logo} alt="my logo" className='logo' />
        </Link> */}
        <div className="nav_list-container">
            <ul className='nav_list'>
                <li className="nav-item">
                    {/* <Link to='/' className="nav-links">
                        Home
                    </Link> */}
                    <a href="/home">Home</a>
                </li> 
                <li className="nav-item">
                    {/* <Link to='/services' className="nav-links">
                        Services
                    </Link> */}
                    <a href="/services">Services</a>
                </li>
                <li className="nav-item">
                    {/* <Link to='/competencies' className="nav-links">
                        Competencies
                    </Link> */}
                    <a href="/competencies">Competencies</a>
                </li>
                {/* <li className="nav-item">
                    <Link to='/work' className="nav-links">
                        Work
                    </Link>
                </li> */}
                {/* <li className="nav-item">
                    <Link to='/contact' className="nav-links">
                        Contact
                    </Link>
                </li> */}
            </ul>

        </div>
        </div>
        {/* </BrowserRouter> */}
        </header>
    </>

  )
}

export default Navbar