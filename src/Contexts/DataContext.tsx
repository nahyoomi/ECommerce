import { createContext, useState } from "react";
import { IPropsChildren } from '../Types/types';
import ProductsJson from '../Data/products.json';
import { featured, recommended } from '../Utils/helpers';

export const GlobalContext = createContext({})

export function DataContextProvider( { children }: IPropsChildren){
    const [adjustment, setAdjustment ] = useState(window.innerWidth);
    const [products, setProducts] = useState(ProductsJson);
    const [productsFeatured, setProductsFeatured] = useState(featured(products)) 
    const [productsRecommended, setProductsRecommended] = useState(recommended(products));

    const value = {adjustment, setAdjustment, products, setProducts, productsFeatured, setProductsFeatured, productsRecommended, setProductsRecommended};
    

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider> 
    )
}