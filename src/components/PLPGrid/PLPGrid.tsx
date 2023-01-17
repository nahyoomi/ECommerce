import {useContext} from 'react'
import Shelf from '../Shelf/Shelf'
import {GlobalContext} from '../../Contexts/DataContext'
import {IProduct} from '../../Types/types'
import './PLPGrid.scss'
function PLPGrid() {
  const {products}: any = useContext(GlobalContext)
  return (
    <div className='grid'>
    {products.map((item : IProduct )=>(
       <Shelf key= {item.productId} item={item}/>
    ))}
    </div>
  )
}

export default PLPGrid