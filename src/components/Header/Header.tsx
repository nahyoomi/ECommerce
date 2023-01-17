import { useState } from "react";
import DrawerCart from "../DrawerCart/DrawerCart";
import MenuDropDown from "../MenuDropDown/MenuDropDown";
import Search from "../Search/Search";
import './Header.scss';
import MyAccount from "../MyAccount/MyAccount";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

export default function Header(){
  const [showMenu, setShowMenu]= useState<any>(false);
  const handleModal = ()=>{
    setShowMenu(true)
  }
  return(
    <header className="header">
      <div className='header__bar'>
        <ul className='header__toolbar'>
         <li className="header__toolbar--menu">
          <MenuDropDown />
         </li>
         <li className="header__toolbar--title">
            <Link to={'/'}>
              <h2>SHOPIT!</h2>
            </Link>
         </li>
         <li className="searchdesktop">
          <Search />
        </li>
         <li className="header__toolbar--cart">
          <MyAccount/>
            <DrawerCart />  
         </li>
        </ul>
        <div className="searchmobile">
          <Search />
        </div>
        <Navbar/>
      </div>
    </header>
  )
}