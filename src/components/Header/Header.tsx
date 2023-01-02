import { useState } from "react";
import DrawerCart from "../DrawerCart/DrawerCart";
import MenuDropDown from "../MenuDropDown/MenuDropDown";
import Search from "../Search/Search";
import './Header.scss';
import {IAdjustmentProps} from '../../Types/types'
import MyAccount from "../MyAccount/MyAccount";
import Navbar from "../Navbar/Navbar";

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
          <MenuDropDown />
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
        <Navbar/>
      </div>
    </header>
  )
}