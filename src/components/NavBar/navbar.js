import React from 'react';
import './navbar.css';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  return (
    <div>
      <nav className='navbar'>
        <div>
          <p className='nav-name'>Portfolio</p>
        </div>
        <div className='desktopMenu'>
          <ScrollLink
            to="home"
            spy={true}
            smooth={true}
            offset={-70} 
            duration={500}
            className='desktopMenuListItem'
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            offset={-70} 
            duration={500}
            className='desktopMenuListItem'
          >
            About
          </ScrollLink>
          <ScrollLink
            to="projects"
            spy={true}
            smooth={true}
            offset={-70} 
            duration={500}
            className='desktopMenuListItem'
          >
            Projects
          </ScrollLink>
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            offset={-70} 
            duration={500}
            className='desktopMenuListItem'
          >
            Contact
          </ScrollLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
