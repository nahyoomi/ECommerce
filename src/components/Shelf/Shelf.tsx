import { useContext } from "react";
import "./Shelf.scss";
import { useNavigate } from "react-router-dom";
import { HiOutlineStar } from "react-icons/hi2";
import {IitemProps} from '../../Types/types'
import { GlobalContext } from "../../Contexts/DataContext";
 
function Shelf({item}: IitemProps) {
  const {orderData, setOrderData}: any = useContext(GlobalContext);
  
  let navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${item.productId}`);
    
  }
  const handleBuy = (event:any) => {
    event.stopPropagation();

    const findRepeatElement = orderData.find((element: any)=>element.productId === item.productId)
    
    if(findRepeatElement){
      
      const newOrder = {
        ...findRepeatElement,
        "installments": [
          {
            "quantity": findRepeatElement.installments[0].quantity + 1,
            "value": findRepeatElement.installments[0].value
          }
        ]
      }
      const nOrder= orderData.filter((element:any)=> element.productId !== item.productId )
      setOrderData(
         [...nOrder,newOrder ]
      )
      console.log("findRepeatElement",orderData);
      return;
    }
    
    setOrderData([...orderData,item])
    console.log('clickbuyshelf', orderData);
  }

  return (
    <ul className='cardcontainer' onClick={handleClick}>
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
          <button onClick={handleBuy}>BUY</button>
        </li>
    </ul>
  )
}

export default Shelf