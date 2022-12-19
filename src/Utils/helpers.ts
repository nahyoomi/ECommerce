import {IProduct} from '../Types/types';

export const allWoman = (products: IProduct[])=>{

    const WomanProducts = products.filter((product)=> product.category === "Woman")
 
     return WomanProducts;
}

export const allMen = (products: IProduct[])=>{
    const MenProducts = products.filter((product)=> product.category === "Men")
     return MenProducts;
}
