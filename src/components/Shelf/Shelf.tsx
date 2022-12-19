import React from 'react'
import "./Shelf.scss";
import { HiOutlineStar } from "react-icons/hi2";
import {IitemProps} from '../../Types/types'

function Shelf({item}: IitemProps) {
  return (
    <ul className='cardContainer'>
      <li className='cardContainer_disscount'>
        <span>OFF</span>
      </li>
        <li className='cardContainer_image'>
            <img src={item.imageUrl}></img>
        </li>
        <li className='cardContainer_item'>
            <p>{item.productName}</p>
        </li>
        <li className='cardContainer_icons'>
            <HiOutlineStar></HiOutlineStar>
            <HiOutlineStar></HiOutlineStar>
            <HiOutlineStar></HiOutlineStar>
            <HiOutlineStar></HiOutlineStar>
            <HiOutlineStar></HiOutlineStar>
            <HiOutlineStar></HiOutlineStar>
        </li>
        <li className='cardContainer_pricecross'><p> of ${ item.listPrice}</p></li>
        <li className='cardContainer_price'><p>por {item.price} </p></li>
        <li className='cardContainer_btn'><button>BUY</button></li>
    </ul>
  )
}

export default Shelf