import {IProduct} from '../Types/types';

export const allWoman = (products: IProduct[])=>{

    const WomanProducts = products.filter((product)=> product.category === "Woman")
 
     return WomanProducts;
}