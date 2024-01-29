import React from 'react';
import './footer.css';
import ig from '../../assets/insta.png';
import li from '../../assets/link.png';
import gi from '../../assets/git.png';

const Footer = () => {
  return (
    <div className='footer'>
        <div class="top-footer">
                <p>Joan Chege.</p>
            </div>
            <div className='footer-social-icons'>
                 <img src={ig} alt="Instagram" className='icon'/> 
                 <img src={li} alt="LinkedIn" className='icon'/> 
                 <img src={gi} alt="Github" className='icon'/> 
            </div>
            <div class="bottom-footer">
                <p>Copyright &copy; Joan Chege  -  2024 All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer;
