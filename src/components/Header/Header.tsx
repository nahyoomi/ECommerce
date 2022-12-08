import { useState } from "react";
import { HiMenu} from "react-icons/hi";
import { TiShoppingCart } from "react-icons/ti";
import MenuDropDown from "../MenuDropDown/MenuDropDown";
import Search from "../Search/Search";
import './Header.scss';

export default function Header(){
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
         <li className="header_toolbar--cart">
            <TiShoppingCart></TiShoppingCart>
            <div className="header_toolbar--cart-pop">
              <span>1</span>
            </div>  
         </li>
        </ul>
        <Search />
      </div>
    </header>
  )
}