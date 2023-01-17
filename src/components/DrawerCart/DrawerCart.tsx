import React, {useContext} from 'react'
import './DrawerCart.scss'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { TiShoppingCart } from "react-icons/ti";
import {setDraweView} from '../../Utils/helpers';
import { GlobalContext } from '../../Contexts/DataContext';

function DrawerCart() {
    const { adjustment}: any = useContext(GlobalContext);
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

  return (
    <>
    <div className="cart" onClick={toggleDrawer}>
        <TiShoppingCart></TiShoppingCart>
        <div className="cart__pop">
            <span>1</span>
        </div>
    </div>
        <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction='right'
            className='bla bla bla'
            size={setDraweView(adjustment)}
        >
            <div className='cart__container'>
                <ul className='cart__container--heading'>
                    <li className='cart__container--heading-item'>
                        <span>My Cart</span>
                        <span>(0 item)</span>
                    </li>
                    <li className='cart__container--heading-btn'>
                        <button onClick={toggleDrawer}>Close</button>
                        <button>Clear Cart</button>
                    </li>
                </ul>
                <div className='cart__container--footer'>
                    <div className='cart__container--footer-div'>
                        <p>Subtotal Amount:</p>
                        <p>$240.00</p>
                    </div>
                    <button>CHECK OUT</button>
                </div>
            </div>
        </Drawer>
    </>
  )
}

export default DrawerCart