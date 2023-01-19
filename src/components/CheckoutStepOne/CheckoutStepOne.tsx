import React, {useContext} from 'react'
import Basket from '../Basket/Basket'
import { GlobalContext } from '../../Contexts/DataContext';
import './CheckoutStepOne.scss'
import { useNavigate } from "react-router-dom";
import { getTotalPrice } from '../../Utils/helpers'

function CheckoutStepOne( {setStep}:any ) {
  let navigate = useNavigate();
  const {orderData}: any = useContext(GlobalContext);

  return (
    <div className='summary'>
        <h3 className='summary__title'>Order Summary</h3>
        <span className='summary__text'>Review iteams in your basket.</span>
        <div className='summary__items'>
          {orderData.map((product : any)=> <Basket order={product}/>)}
        </div>
        <div className='summary__total'>
            <p className='summary__total--subtotal'>Subtotal Amount:</p>
            <h2 className='summary__total--total'>$ { getTotalPrice(orderData) }</h2>
        </div>
        <div className='summary__actions'>
            <button  onClick={()=> navigate(`/`) } className='summary__actions--shop'>Continue Shopping</button>
            <button onClick={()=> setStep(2)} className='summary__actions--next'>Next Step</button>
        </div>
    </div>
  )
}

export default CheckoutStepOne