import {IProduct} from '../Types/types';

export const allWoman = (products: IProduct[])=>{

    const WomanProducts = products.filter((product)=> product.category === "recommended")
 
     return WomanProducts;
}
export const ChangeShelf = (adjustment : number) => {
  if(adjustment <= 850){
    return 2;
  }
    return 4;
}
export const allMen = (products: IProduct[])=>{
    const MenProducts = products.filter((product)=> product.category === "featured")
     return MenProducts;
}

export const setDraweView = (adjustment: number) => {
    if(adjustment <= 648){
      return adjustment;
    }
      return 500;
}