import React from 'react';
import './navbar.css';
import { Link } from 'react-scroll';


const Navbar = () => {
  return (
    <div>
      <nav className='navbar'>
        <div className='nav-logo'>
            <p className='nav-name'>Portfolio</p>
        </div>
        <div className='desktopMenu'>
            <Link className='desktopMenuListItem'>Home</Link>
            <Link className='desktopMenuListItem'>About</Link>
            <Link className='desktopMenuListItem'>Projects</Link>
            <Link className='desktopMenuListItem'>Contact</Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
