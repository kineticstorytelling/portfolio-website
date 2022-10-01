import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';

const logo = require('./assets/mylogo.png');

function Navbar() {
  return (
    <>
    <div className='nav_list'>
        <Link to="/" className="logo_btn">
        <img src={logo} alt="my logo" className='logo' />
        </Link>
        <div className="nav_list-container">
            <ul>
                <li className="nav-item">
                    <Link to='/' className="nav-links">
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='/services' className="nav-links">
                        Services
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='/competencies' className="nav-links">
                        Competencies
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='/work' className="nav-links">
                        Work
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='/contact' className="nav-links">
                        Contact
                    </Link>
                </li>
            </ul>

        </div>

        </div>
    </>
  )
}

export default Navbar