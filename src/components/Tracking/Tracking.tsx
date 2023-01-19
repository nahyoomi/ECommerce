import React from 'react'
import './Tracking.scss'
function Tracking() {
  return (
    <div className='tracking'>
        <ul className='tracking__list'>
            <li className='tracking__list--item'>
                <div className='circle'>
                    <div className='circle__icon'>
                        <h4 className='circle__icon--step'>1</h4>
                    </div>
                    <h6 className='circle__subtitle'>Order Summary</h6>
                </div> 
            </li>
            <li className='tracking__list--item'>
                <div className='circle'>
                    <div className='circle__icon'>
                        <h4 className='circle__icon--step'>2</h4>
                    </div>
                    <h6 className='circle__subtitle'>Shipping Details</h6>
                </div> 
            </li>
            <li className='tracking__list--item'>
                <div className='circle'>
                    <div className='circle__icon'>
                        <h4 className='circle__icon--step'>3</h4>
                    </div>
                    <h6 className='circle__subtitle'>Payment</h6>
                </div> 
            </li>
        </ul>
    </div>
  )
}

export default Tracking