import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'
function Nav() {
  return (
    <>
        <div className='navBar'>
            <ul className='nav'>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/addTask'>Add Task</Link></li>
                <li><Link to='/completedTask'>Completed Tasks</Link></li>
            </ul>
        </div>
    </>
  )
}

export default Nav