import "./Shelf.scss";
import { HiOutlineStar } from "react-icons/hi2";
import {IitemProps} from '../../Types/types'

function Shelf({item}: IitemProps) {
  
  return (
    <ul className='cardcontainer'>
      {item.listPrice != null
        && 
        <li className='cardcontainer__disscount'>
          <span>OFF</span>
        </li>
      }
        <li className='cardcontainer__image'>
            <img src={item.imageUrl}></img>
        </li>
        <li className='cardcontainer__item'>
            <p>{item.productName}</p>
        </li>
        <li className='cardcontainer__icons'>
            <HiOutlineStar></HiOutlineStar>
            <HiOutlineStar></HiOutlineStar>
            <HiOutlineStar></HiOutlineStar>
            <HiOutlineStar></HiOutlineStar>
            <HiOutlineStar></HiOutlineStar>
            <HiOutlineStar></HiOutlineStar>
        </li>
        <li className='cardcontainer__pricecross'>
          {item.listPrice === null
            ? <br></br>
            : <p> of ${item.listPrice}</p>
          }
        </li>
        <li className='cardcontainer__price'>
          <p>por {item.price} </p>
        </li>
        <li className='cardcontainer__btn'>
          <button>BUY</button>
        </li>
    </ul>
  )
}

export default Shelf