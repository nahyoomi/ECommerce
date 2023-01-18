import React from 'react'
import { Link } from 'react-router-dom'
import './Basket.scss'

function Basket() {
  return (
    <div className='basket'>
        <div className='basket__controller'>
            <button className='basket__controller--button'>+</button>
            <button className='basket__controller--button'>-</button>
        </div>
        <div className='basket__wrapper'>
            <div className='basket__wrapper--picture'>
                <img className='image' src='https://live.staticflickr.com/65535/52603215966_87d9cc904b_m.jpg'></img>
            </div>
            <div className='basket__wrapper--details'>
                <Link to={'*'} className='linked'>
                    <h4 className='linked__product'>Leader Boots</h4>
                </Link>
                <div className='specs'>
                    <div className='specs__quantity'>
                        <span>Quantity</span>
                        <h5>1</h5>
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
                <h4>$79.00</h4>
            </div>
            <button className='basket__wrapper--button'>X</button>
        </div>
    </div>
  )
}

export default Basket