import React, { useState,useContext } from 'react'
import './Filter.scss'
import { GlobalContext } from '../../Contexts/DataContext';
import CategoryJson from '../../Data/categories.json'

function Filter() {
  
  const { productsFilter, setProductsFilter, products }:any = useContext(GlobalContext);

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
    <ul className='filter'>
      <h2>FILTERS</h2>
      {
      CategoryJson.map((category) => {
        return (
          <li key={category.categoryId}>
            <p>{category.categoryName}</p>
            {
              category.subCategory.map((subCategory) => {
                return (
                  <ul key={subCategory.subCategoryId}>
                    <li>
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
  )
}

export default Filter