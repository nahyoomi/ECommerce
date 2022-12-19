import React from 'react'
import "./Shelf.scss";
import { HiOutlineStar } from "react-icons/hi2";
import images from '../../assets/images';
import {IWomanProps} from '../../Types/types'

function Shelf({woman}: IWomanProps) {
  return (
    <ul className='cardContainer'>
        <li className='cardContainer_image'>
            <img src={woman.imageUrl}></img>
        </li>
        <li className='cardContainer_item'>
            <p>{woman.productName}</p>
        </li>
        <li className='cardContainer_icons'>
            <HiOutlineStar> </HiOutlineStar>
            <HiOutlineStar> </HiOutlineStar>
            <HiOutlineStar> </HiOutlineStar>
            <HiOutlineStar> </HiOutlineStar>
            <HiOutlineStar> </HiOutlineStar>
            <HiOutlineStar> </HiOutlineStar>
        </li>
        <li className='cardContainer_pricecross'><p> of ${ woman.listPrice}</p></li>
        <li className='cardContainer_price'><p>por {woman.price} </p></li>
        <li className='cardContainer_btn'><button>BUY</button></li>
    </ul>
  )
}

export default Shelf