import {useContext} from 'react';
import { GlobalContext } from '../../Contexts/DataContext';
import { useNavigate } from "react-router-dom";
import { getTotalPrice } from '../../Utils/helpers';
import { IsetStepProps } from '../../Types/types';
import { FaArrowLeft, FaCheck, FaCcVisa } from "react-icons/fa";
import './CheckoutStepThree.scss';

function CheckoutStepThree({setStep}:IsetStepProps) {
    const {orderData}: any = useContext(GlobalContext);
    let navigate = useNavigate();
  return (
    <form className='form'>
        <h3 className='form__title'>Payment</h3>
        <br/>
        <span className='form__subtitle'>Payment Options</span>
        <div className='form__credit'>
            <div className='form__pay'>
                <div className='form__credit'>
                    <input type='radio'/>
                    <label>
                        <div className='form__pay'>
                            <h4>Credit Card</h4>
                            <span>Pay with Visa, Master Card and other debit or credit card</span>
                        </div>
                        <div>
                            <div className='form__img'> <FaCcVisa /></div>
                        </div>
                    </label>
                </div>
            </div>
        </div> 
        <div className='form__paypal'>
            <div>
                <div className='form__credit'>
                    <input type='radio'/>
                    <label>
                        <div className='form__pay'>
                            <h4>Paypal</h4>
                            <span>Pay easily, fast and secure with Paypal.</span>
                        </div>
                        <div className='form__img'> <FaCcVisa /> </div>
                    </label>
                </div>
            </div>
        </div> 
        <div className='form__amount'>
            <p>Total:</p>
            <h2>${ getTotalPrice(orderData) }</h2>
        </div>
        <br/>
        <div className='form__confirmation'>
            <button  onClick={()=> setStep(2)} ><FaArrowLeft/> Go Back</button>
            <button onClick={()=> navigate(`/`)}><FaCheck/>Confirm</button>
        </div> 
    </form>
  )
}

export default CheckoutStepThree