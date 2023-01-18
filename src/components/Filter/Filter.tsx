import React, { useEffect,useContext } from 'react'
import './Filter.scss'
import { GlobalContext } from '../../Contexts/DataContext';
import CategoryJson from '../../Data/categories.json'

function Filter() {
  const { productsFilter, setProductsFilter, products, adjustment }:any = useContext(GlobalContext);
  const [isOpen, setIsOpen] = React.useState(adjustment<1024?'notOpen':'isOpen')
  
  
  const handleClick = (()=> {
    if(adjustment<1024){
      setIsOpen(isOpen === 'isOpen'? 'notOpen': 'isOpen')
    }else{
      setIsOpen('isOpen')
    } 
    console.log(isOpen);
    
  }) 


const handleOnChange = ({subCategory,category}:any) => {
  subCategory.checked = !subCategory.checked;


  if(subCategory.checked){

    const filteredProducts = productsFilter.filter((product:any) => {
      return product.gender.subCategory === subCategory.subCategoryName
    } )
    
    setProductsFilter(filteredProducts)
  }else{
    setProductsFilter(products)
  }
  
};

  return (
    <div className='containertofilter'>
    <h2 className='filter__tittle' onClick={handleClick}>FILTERS</h2>
    
    <ul className={`filter ${isOpen}`} >
      
      {CategoryJson.map((category) => {
        return (
          <li className='categories' key={category.categoryId}>
            <p className='categories__name'>{category.categoryName}</p>
            {category.subCategory.map((subCategory) => {
                return (
                  <ul className='options' key={subCategory.subCategoryId}>
                    <li className='options__box'>
                      <input
                        type="checkbox"
                        checked={subCategory.checked}
                        id={`custom-checkbox-${subCategory.subCategoryId}`}
                        name={subCategory.subCategoryName}
                        value="true"
                        onChange={() => handleOnChange({subCategory,category})}
                      />
                      <label htmlFor={`custom-checkbox-${subCategory.subCategoryId}`}>{subCategory.subCategoryName}</label>
                    </li>
                  </ul>
                )
              })
            }
          </li>
        )
      })
      }
    </ul>
    </div>
  )
}

export default Filter