import React from 'react'
import '../index.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header>
        <nav>
            <Link className='nav-link' to='/'>HOME</Link>
            <Link className='nav-link' to='/calculator'>CALCULATOR</Link>
            <Link className='nav-link' to='/history'>HISTORY</Link>
        </nav>
    </header>
  )
}

export default Navbar
