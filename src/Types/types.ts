export interface IDataOnlyProps  {
    adjustment: number
    setAdjustment:React.Dispatch<React.SetStateAction<number>>
}
export type IAdjustmentProps  = {
    adjustment: number
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
