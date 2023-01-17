import { createContext, useState } from "react";
import { IPropsChildren } from '../Types/types';
import ProductsJson from '../Data/products.json';

export const GlobalContext = createContext({})

export function DataContextProvider( { children }: IPropsChildren){
    const [adjustment, setAdjustment ] = useState(window.innerWidth);
    const [products, setProducts] = useState(ProductsJson);
    const value = {adjustment, setAdjustment, products, setProducts};

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider> 
    )
}