import React from 'react'
import './SubscriptionForm.scss';

function SubscriptionForm() {
  return (
    <div  className='fullform'>
        <h2> Join our news and promotions!</h2>
        <form className='fullform__form'>
            <input
                placeholder='Enter your name'
            />
            <input
                placeholder='Enter your email'
            />
            <button>Subscribe</button>
        </form>
    </div>
  )
}

export default SubscriptionForm;