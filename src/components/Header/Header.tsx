import { useState } from "react";
import { HiMenu} from "react-icons/hi";
import DrawerCart from "../DrawerCart/DrawerCart";
import MenuDropDown from "../MenuDropDown/MenuDropDown";
import MyAccount from "../MyAccount/MyAccount";
import Search from "../Search/Search";
import './Header.scss';
import {IAdjustmentProps} from '../../Types/types'

export default function Header({adjustment}:IAdjustmentProps){
  const [showMenu, setShowMenu]= useState<any>(false);
  const handleModal = ()=>{
    setShowMenu(true)
  }
  return(
    <header className="header">
      <div className='header_bar'>
        <ul className='header_toolbar'>
         <li className="header_toolbar--menu">
          <HiMenu onClick={handleModal}></HiMenu>
          {showMenu && (
            <MenuDropDown setShowMenu={setShowMenu}/>
          )}
         </li>
         <li className="header_toolbar--title">
            <h2>SHOPIT!</h2>
         </li>
         <li className="searchDesktop">
          <Search />
        </li>
         <li className="header_toolbar--cart">
            <MyAccount/>
            <DrawerCart adjustment={adjustment}/>  
         </li>
        </ul>
        <div className="searchMobile">
          <Search />
        </div>
      </div>
    </header>
  )
}