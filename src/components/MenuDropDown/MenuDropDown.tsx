import React from 'react'
import './MenuDropDown.scss';
import { HiMenu, HiX } from "react-icons/hi";
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { NavLink } from 'react-router-dom';

function MenuDropDown() {
  const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
  return (
    <>
      <div onClick={toggleDrawer}><HiMenu></HiMenu></div>
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction='left'
          className='bla bla bla'
        >
        <div className='content'>
          <span onClick={toggleDrawer}><HiX></HiX></span>
          <div className='content__heading'>
            <button>Login</button>
            <button>My Orders</button>
          </div>
          <ul className='content__categories'>
            <NavLink to={'/'} className='content__categories--link'>
              <li>Home</li>
            </NavLink>
            <NavLink to={'/shop'} className='content__categories--link'>
              <li>Shop</li>
            </NavLink>
            <NavLink to={'/featured'} className='content__categories--link'>
              <li>Featured</li>
            </NavLink>
            <NavLink to={'/recommended'} className='content__categories--link'>
              <li>Recommended</li>
            </NavLink>
          </ul>
        </div>
        </Drawer>
    </>
  )
}

export default MenuDropDown;