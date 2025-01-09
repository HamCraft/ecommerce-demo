/* eslint-disable @typescript-eslint/no-explicit-any */
export interface simplifiedProduct {
    _id: string;
    imageUrl: string;
    images:string;
    price: number;
    slug: string;
    categoryName: string;
    name: string;
    discountPercentage:number;
    priceWithoutDiscount:number;
    rating:number;
    ratingCount:number;
  }
  
  export interface fullProduct {
    _id: string;
    images: any;
    price: number;
    slug: string;
    categoryName: string;
    name: string;
    description: string;
    price_id: string;
    discountPercentage:number;
    priceWithoutDiscount:number;
    rating:number;
    ratingCount:number;
    quantity:number;
  }