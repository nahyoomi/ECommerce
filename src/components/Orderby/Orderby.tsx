import React,{useState,useContext} from 'react'
import { GlobalContext } from '../../Contexts/DataContext';
import {orderByProduct} from '../../Utils/helpers'
import './Orderby.scss'

function Orderby() {
  const [value, setValue] = useState('')
  const { productsFilter, setProductsFilter, products}:any = useContext(GlobalContext);

  const handleChange = (e:any) => {
    setValue(e.target.value)

    const sortedList = orderByProduct(productsFilter, e)
    setProductsFilter(sortedList)
  }
  return (
    <div className='orderby'>
      <label className='orderby__label'>
        Order by:
      </label>
        <select className='orderby__selector'value={value} onChange={handleChange}>
          <option >--Select--</option>
          <option value='A-Z'>A-Z</option>
          <option value='BestRated'>Most Rated</option>
          <option value='LowerPrice'>Lower Price</option>
          <option value='HigherPrice'>Higher Price</option>
        </select>
    </div>
  )
}

export default Orderby