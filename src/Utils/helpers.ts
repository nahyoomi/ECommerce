import {IProduct} from '../Types/types';

export const featured = (products: IProduct[])=>{

    const FeauturedProducts = products.filter((product)=> product.category === "featured")
 
     return FeauturedProducts;
}
export const ChangeShelf = (adjustment : number) => {
  if(adjustment <= 850){
    return 2;
  }
    return 4;
}
export const recommended = (products: IProduct[])=>{
    const recommended = products.filter((product)=> product.category === "recommended")
     return recommended;
}

export const setDraweView = (adjustment: number) => {
    if(adjustment <= 648){
      return adjustment;
    }
      return 500;
}
export const getProduct = (products : IProduct[], id : string | undefined  | number )=>{
  const filteredProduct = products.find((product: IProduct)=>product.productId+"" === id)
  return filteredProduct;
  
}