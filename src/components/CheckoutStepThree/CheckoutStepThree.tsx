import React from 'react'
import './CheckoutStepThree.scss'

function CheckoutStepThree() {
  return (
    <form className='form'>
        <h3 className='form__title'>Payment</h3>
        <br/>
        <span className='form__subtitle'>Payment Options</span>
        <div className='form__credit'>
            <div>
                <div>
                    <input type='radio'/>
                    <label>
                        <div>
                            <h4>Credit Card</h4>
                            <span>Pay with Visa, Master Card and other debit or credit card</span>
                        </div>
                        <div>
                            <div>IMG card</div>
                            <div>IMG card</div>
                        </div>
                    </label>
                </div>
            </div>
            <div></div>
        </div> 
        <div className='form__paypal'>
            <div>
                <div>
                    <input type='radio'/>
                    <label>
                        <div>
                            <h4>Paypal</h4>
                            <span>Pay easily, fast and secure with Paypal.</span>
                        </div>
                        <div>IMG paypal</div>
                    </label>
                </div>
            </div>
        </div> 
        <div className='form__amount'>
            <p>Total:</p>
            <h2>$79.00</h2>
        </div>
        <br/>
        <div className='form__confirmation'>
            <button>Go Back</button>
            <button>Confirm</button>
        </div> 
    </form>
  )
}

export default CheckoutStepThree