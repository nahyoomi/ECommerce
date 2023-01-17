import React from 'react'
import './Navbar.scss';
function Navbar() {
  return (
    <ul className='nav'>
        <li className='nav__item'>Home</li>
        <li className='nav__item'>Shop</li>
        <li className='nav__item'>Featured</li>
        <li className='nav__item'>Recommended</li>
    </ul>
  )
}

export default Navbar