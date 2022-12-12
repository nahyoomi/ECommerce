import React from 'react'
import { HiMail } from "react-icons/hi";
import { FaHeadset, FaReact } from "react-icons/fa";
import './Footer.scss';
function Footer() {
  return (
    <div className='footer'>
      <div className='footer_location'>
      <h3>Location</h3>
      <hr/>
      <ul className='footer_location--text'>
        <li className='footer_location--text-item'>8915 Gerber Road, Sacramento, CA 95829</li>
        <li className='footer_location--text-item'>Sacramento, CA</li>
        <li className='footer_location--text-item'>buy@shopit.com</li>
        <li className='footer_location--text-item'> + 00 283 383 2765</li>
      </ul>
      </div>
      <div className='footer_contact'>
        <div className='footer_contact--btns'>
          <button><HiMail></HiMail>CONTACT</button>
          <button><FaHeadset></FaHeadset> SPEAK WITH AN AGENT</button>
        </div>
      </div>
      <div className='footer_branding'>
        <ul className='footer_branding--list'>
          <li className='footer_branding--list-text'>
            <p>Developed for</p>
            <p>NAHOMI</p>
          </li>
          <li className='footer_branding--list-text'>
            <p>Powered by</p>
            <FaReact></FaReact> REACT
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer