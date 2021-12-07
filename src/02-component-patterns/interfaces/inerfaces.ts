import { ReactElement } from "react";
import { Props as ProductCardProps, Props } from '../components/ProductCard';
import { ProductImageProps } from "../components/ProductImage";
import { PropductTitleProps } from '../components/ProductTitle';
import { ProductButtonsProps } from '../components/ProductButtons';



export interface Product {
    id: string;
    title: string;
    img?: string;
};

export interface ProductContextProps {
    counter: number;
    increaseBy: (value: number) => void;
    product: Product;

}

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps) : JSX.Element;
    Buttons: (className: ProductButtonsProps ) => JSX.Element;
    Image: (Props: ProductImageProps)=> JSX.Element,
    Title: (Props: PropductTitleProps) => JSX.Element;
      
}

export interface onChangeArgs {
    product: Product;
    count: number,
}

export interface ProductInCart extends Product {
    count: number

}