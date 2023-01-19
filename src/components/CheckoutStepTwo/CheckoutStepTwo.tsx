import React from 'react'
import './CheckoutStepTwo.scss'

function CheckoutStepTwo() {
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
                                <div>
                                  <div>Phone</div>
                                  <input type='text' />
                                    <div>
                                        <div>Flag</div>
                                    </div>  
                                </div>
                            </div>
                        </div> 
                    </div>  
                    <div className='form__fieldset'>
                        <div className='intshipping'>
                            <label>Shipping Option</label>
                            <div>
                                <input type='checkbox'/>
                                <label>
                                    <h5>
                                        International Shipping
                                        <span>7-14 days</span>
                                    </h5>
                                    <h4>$50.00</h4>
                                </label>
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
                            <td><span>International Shipment:</span></td>
                            <td><h4>$0.00</h4></td>
                        </tr>
                        <tr>
                            <td><span>Subtotal:</span></td>
                            <td><h4>$79.00</h4></td>
                        </tr>
                        <tr>
                            <td><span>Total:</span></td>
                            <td><h2>$79.00</h2></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <br/>   
            <div className='shipping__formulary--actions'>
                <button>Go Back</button>
                <button>Next Step</button>
            </div>  
        </form>

    </div>
  )
}

export default CheckoutStepTwo