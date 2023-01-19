import React, {useContext} from 'react'
import './CheckoutStepTwo.scss'
import { getTotalPrice } from '../../Utils/helpers'
import { GlobalContext } from '../../Contexts/DataContext';

function CheckoutStepTwo({setStep}:any) {
    const {orderData, setOrderData}: any = useContext(GlobalContext);
    
  return (
    <div className='shipping'>
        <h3 className='shipping__title'>Shipping Details</h3>
        <form className='shipping__formulary'>
            <div className='shipping__formulary--wrapper'>
                <div className='form'>
                    <div className='form__fieldset'>
                        <div className='form__fieldset--field'>
                            <div className='input'>
                                <label>* Full Name</label>
                                <input type='text' />
                            </div>
                        </div>
                        <div className='form__fieldset--field'>
                            <div className='input'>
                                <label>* Email Address</label>
                                <input type='text' />
                            </div>
                        </div>
                    </div>  
                    <div className='form__fieldset'>
                        <div className='form__fieldset--field'>
                            <div className='input'>
                                <label>* Shipping Address</label>
                                <input type='text' />
                            </div>
                        </div>
                        <div className='form__fieldset--field'>
                            <div className='input'>
                                <label>* Mobile Number</label>
                                <input type='text' />
                            </div>
                        </div> 
                    </div>  
                    
                </div>
            </div>
            <br/>  
            <div className='shipping__formulary--total'>
                <table>
                    <tbody>
                        <tr>
                            <td><span>Subtotal:</span></td>
                            <td><h4>$ { getTotalPrice(orderData) }</h4></td>
                        </tr>
                        <tr>
                            <td><span>Total:</span></td>
                            <td><h2>$ { getTotalPrice(orderData) }</h2></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <br/>   
            <div className='shipping__formulary--actions'>
                <button onClick={()=> setStep(1)}>Go Back</button>
                <button onClick={()=> setStep(3)}>Next Step</button>
            </div>  
        </form>

    </div>
  )
}

export default CheckoutStepTwo