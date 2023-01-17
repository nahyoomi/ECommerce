import React from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.scss';
function Navbar() {
  return (
    <ul className='nav'>
        <li className='nav__item'>
          <NavLink to={'/'} className='navigatelink'>
            Home
          </NavLink>
        </li>
        <li className='nav__item'>
          <NavLink to={'/shop'} className='navigatelink'>
            Shop
          </NavLink>
        </li>
        <li className='nav__item'>
          <NavLink to={'/featured'} className='navigatelink'>
            Featured
          </NavLink>
        </li>
        <li className='nav__item'>
          <NavLink to={'/recommended'} className='navigatelink'>
            Recommended
          </NavLink>
        </li>
    </ul>
  )
}

export default Navbar