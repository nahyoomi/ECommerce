import React from 'react'
import './MenuDropDown.scss';
import { HiMenu, HiX } from "react-icons/hi";
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'

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
            <li>Home</li>
            <li>Shop</li>
            <li>Featured</li>
            <li>Recommended</li>
          </ul>
        </div>
        </Drawer>
    </>
  )
}

export default MenuDropDown;