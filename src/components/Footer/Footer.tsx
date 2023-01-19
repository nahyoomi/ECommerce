import React from 'react'
import { HiMail } from "react-icons/hi";
import { FaHeadset, FaReact } from "react-icons/fa";
import './Footer.scss';
import { NavLink } from 'react-router-dom';
function Footer() {
  return (
    <div className='footer'>
      <div className='footer__location'>
      <h3>Location</h3>
      <hr/>
      <ul className='footer__location--text'>
        <li className='footer__location--text-item'>8915 Gerber Road, Sacramento, CA 95829</li>
        <li className='footer__location--text-item'>Sacramento, CA</li>
        <li className='footer__location--text-item'>buy@shopit.com</li>
        <li className='footer__location--text-item'> + 00 283 383 2765</li>
      </ul>
      </div>
      <div className='footer__contact'>
        <div className='footer__contact--btns'>
          <a href={'https://www.linkedin.com/in/nahomiconde/'}>
            <button><HiMail></HiMail>CONTACT</button>
          </a>
          <a href='https://github.com/nahyoomi'>
            <button><FaHeadset></FaHeadset> SPEAK WITH AN AGENT</button>
          </a>
        </div>
      </div>
      <div className='footer__branding'>
        <ul className='footer__branding--list'>
          <li className='footer__branding--list-text'>
            <p>Developed for</p>
            <p>NAHOMI</p>
          </li>
          <li className='footer__branding--list-text'>
            <p>Powered by</p>
            <FaReact></FaReact> REACT
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer