import React from 'react'
import '../navBar/NavBar.css'
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className='nav'>
        <h1 className="nav-title">B.L.I.S.</h1>
        <span className="nav-description">Book Library In Seconds</span>
        {/* <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav> */}
        </div>
  )
}

export default NavBar