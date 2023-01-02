import React from 'react'
import './Navbar.scss';
function Navbar() {
  return (
    <ul className='nav'>
        <li className='nav__item'>New In</li>
        <li className='nav__item'>Trending</li>
        <li className='nav__item'>Clothing</li>
        <li className='nav__item'>Best Sellers</li>
    </ul>
  )
}

export default Navbar