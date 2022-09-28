import React from 'react'

function Navbar() {
  return (
    <>
    <div className='nav_list'>
        <div className="nav_list-container">
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className="nav-item">
                    Home
                </li>
            </ul>

        </div>
        Navbar
        </div>
    </>
  )
}

export default Navbar