import React from 'react'
import Basket from '../Basket/Basket'
import './CheckoutStepOne.scss'

function CheckoutStepOne() {
  return (
    <div className='summary'>
        <h3 className='summary__title'>Order Summary</h3>
        <span className='summary__text'>Review iteams in your basket.</span>
        <div className='summary__items'>
            {/* <Basket/> */}
        </div>
        <div className='summary__total'>
            <p className='summary__total--subtotal'>Subtotal Amount:</p>
            <h2 className='summary__total--total'>$240.00</h2>
        </div>
        <div className='summary__actions'>
            <button className='summary__actions--shop'>Continue Shopping</button>
            <button className='summary__actions--next'>Next Step</button>
        </div>
    </div>
  )
}

export default CheckoutStepOne