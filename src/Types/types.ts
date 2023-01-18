export interface IDataFilterProps  {
    category: IProduct[]
}
export interface IDataArrayProducts {
    products: IProduct[]
  }

export type IProduct = {
        "productId": number
        "productName": string
        "category": string
        "stars": number
        "imageUrl": string
        "listPrice": number | null
        "price": number
        "installments": {
            quantity: number;
            value: number;
        }[];
}
export type IitemProps  = {
    item: IProduct
}

 export interface IPropsChildren {
    children: JSX.Element;
  }
