import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>
        <div className="nav">
            <ul className="navItems">
                <li className="navItem"><Link to='/home'>Home</Link></li>
                <li className="navItem"><Link to='/login'>login</Link></li>
                <li className="navItem"><Link to='/contact'>Contact Us</Link></li>
                <li className="navItem"><Link to='/aboutus'>About Us</Link></li>
            </ul>
        </div>
    </>
  )
}

export default Nav