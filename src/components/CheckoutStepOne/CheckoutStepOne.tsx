import {useContext} from 'react';
import { GlobalContext } from '../../Contexts/DataContext';
import { getTotalPrice } from '../../Utils/helpers';
import { useNavigate } from "react-router-dom";
import { IsetStepProps, IProduct } from '../../Types/types';
import Basket from '../Basket/Basket';
import { IoStorefrontSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import './CheckoutStepOne.scss';

function CheckoutStepOne( {setStep}:IsetStepProps ) {

  const {orderData}: any = useContext(GlobalContext);

  let navigate = useNavigate();
  
  return (
    <div className='summary'>
      <h3 className='summary__title'>Order Summary</h3>
      <span className='summary__text'>Review iteams in your basket.</span>
      <div className='summary__items'>
        {orderData.map((product : IProduct)=> <Basket order={product}/>)}
      </div>
      <div className='summary__total'>
        <p className='summary__total--subtotal'>Subtotal Amount:</p>
        <h2 className='summary__total--total'>$ { getTotalPrice(orderData) }</h2>
      </div>
      <div className='summary__actions'>
        <button  onClick={()=> navigate(`/`) } className='summary__actions--shop'> <IoStorefrontSharp />Continue Shopping</button>
        <button onClick={()=> setStep(2)} className='summary__actions--next'>Next Step  <FaArrowRight /></button>
      </div>
    </div>
  )
}

export default CheckoutStepOne;