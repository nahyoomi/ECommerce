import { ListItemAvatar } from '@mui/material';
import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../Contexts/DataContext';
import './Basket.scss'

function Basket({order}: any) {
    const {orderData, setOrderData}: any = useContext(GlobalContext);

    const handleAdd = (order: any) =>{
        const newOrder = {
            ...order,
            "installments": [
              {
                "quantity": order.installments[0].quantity + 1,
                "value": order.installments[0].value
              }
            ]
          }
           
        const nOrder= orderData.filter((item:any)=> item.productId !== order.productId )
         setOrderData(
            [...nOrder,newOrder ]
            )  
        console.log(orderData);  
    }

    const handleLess = (order: any) =>{
        if(order.installments[0].quantity <= 1){
            const nOrder= orderData.filter((item:any)=> item.productId !== order.productId )
            setOrderData(nOrder)
            console.log(orderData);
            return;  
        }
        const newOrder = {
            ...order,
            "installments": [
              {
                "quantity": order.installments[0].quantity - 1,
                "value": order.installments[0].value
              }
            ]
          }
          const nOrder= orderData.filter((item:any)=> item.productId !== order.productId )
         setOrderData(
            [...nOrder,newOrder ]
            )  
        console.log(orderData);
    }

    const handleRemove = (order : any)=> {
         const newOrder = orderData.filter((item: any)=> item.productId !== order.productId)
         setOrderData(newOrder)
    }
  return (
    <div className='basket'>
        <div className='basket__controller'>
            <button onClick={()=>{handleAdd(order)}} className='basket__controller--button'>+</button>
            <button onClick={()=>{handleLess(order)}}className='basket__controller--button'>-</button>
        </div>
        <div className='basket__wrapper'>
            <div className='basket__wrapper--picture'>
                <img className='image' src={order.imageUrl}></img>
            </div>
            <div className='basket__wrapper--details'>
                <Link to={'*'} className='linked'>
                    <h4 className='linked__product'>{order.productName}</h4>
                </Link>
                <div className='specs'>
                    <div className='specs__quantity'>
                        <span>Quantity</span>
                        <h5>{order.installments[0].quantity}</h5>
                    </div> 
                    <div className='specs__size'>
                        <span>Size</span>
                        <h5>M</h5>
                    </div> 
                    <div className='specs__color'>
                        <span>Color</span>
                        <div></div>
                    </div> 
                </div>
            </div>
            <div className='basket__wrapper--price'>
                <h4>$ {order.price}</h4>
            </div>
            <button onClick={()=>{handleRemove(order)}} className='basket__wrapper--button'>X</button>
        </div>
    </div>
  )
}

export default Basket