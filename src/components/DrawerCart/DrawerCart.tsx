import React, {useContext, useEffect} from 'react'
import './DrawerCart.scss'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { TiShoppingCart } from "react-icons/ti";
import {setDraweView} from '../../Utils/helpers';
import { GlobalContext } from '../../Contexts/DataContext';
import Basket from '../Basket/Basket';
import { getTotalPrice, getTotalCount } from '../../Utils/helpers'
import { useNavigate } from "react-router-dom";
import {IProduct} from '../../Types/types'


function DrawerCart() {
    let navigate = useNavigate();
    const { adjustment, orderData, setOrderData}: any = useContext(GlobalContext);
    const [isOpen, setIsOpen] = React.useState(false)
    const [totalCounter, setItotalCounter] = React.useState(0)
    const [totalPrice, setItotalPrice] = React.useState(0)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    useEffect(()=>{
        setItotalCounter(getTotalCount(orderData))
        setItotalPrice(getTotalPrice(orderData))
        
    },[orderData])

   
  
    
  return (
    <>
    <div className="cart" onClick={toggleDrawer}>
        <TiShoppingCart></TiShoppingCart>
        <div className="cart__pop">
            <span>{totalCounter}</span>
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
                        <span>({orderData.length} items)</span>
                    </li>
                    <li className='cart__container--heading-btn'>
                        <button onClick={toggleDrawer}>Close</button>
                        <button onClick={()=>{setOrderData([])}}>Clear Cart</button>
                    </li>
                </ul>
                <section className='baskets'>
                    {
                        orderData.length === 0 
                        ? 
                        <p>Cart is empty, you can start adding products</p>
                        :
                        orderData.map((order: IProduct)=>{
                            return <Basket order={order} key={order.productId} />
                        })
                    }
                </section>
                <div className='cart__container--footer'>
                    <div className='cart__container--footer-div'>
                        <p>Subtotal Amount:</p>
                        <p>$ {totalPrice}</p>
                    </div>
                    <button onClick={() =>{navigate(`/checkout`) }}>CHECK OUT</button>
                </div>
            </div>
        </Drawer>
    </>
  )
}

export default DrawerCart