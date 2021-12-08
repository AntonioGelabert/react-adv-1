import { ReactElement } from "react";
import { Props as ProductCardProps, Props } from '../components/ProductCard';
import { ProductImageProps } from "../components/ProductImage";
import { PropductTitleProps } from '../components/ProductTitle';
import { ProductButtonsProps } from '../components/ProductButtons';
import { BooleanLiteral } from "typescript";



export interface Product {
    id: string;
    title: string;
    img?: string;
};

export interface ProductContextProps {
    counter: number;
    increaseBy: (value: number) => void;
    product: Product;
    maxCount?: number;

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

export interface InitialValues {

    count?: number;
    maxCount?: number;

}

export interface ProductCardHandlers {
    count: number;
    isMaxCountReached: Boolean;
    maxCount?: number;
    product: Product;

    increaseBy: (value:number) => void;
    reset: () => void;

}
