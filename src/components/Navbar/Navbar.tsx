import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.scss';
function Navbar() {
  return (
    <ul className='nav'>
        <li className='nav__item'>
          <Link to={'/'}>
            Home
          </Link>
        </li>
        <li className='nav__item'>
          <Link to={'/shop'}>
            Shop
          </Link>
        </li>
        <li className='nav__item'>
          <Link to={'/featured'}>
            Featured
          </Link>
        </li>
        <li className='nav__item'>
          <Link to={'/recommended'}>
            Recommended
          </Link>
        </li>
    </ul>
  )
}

export default Navbar