import styles from '../styles/styles.module.css';


import { useContext } from "react";
import { ProductContext, Props } from "./ProductCard";

export interface PropductTitleProps {
    title?: string;
    className?: string;
    style?: React.CSSProperties

}

export const ProductTitle = ({ title, className, style}: PropductTitleProps)  => {

    const { product } = useContext(ProductContext);

    return (
        <span 
             className={ `${styles.productDescription } ${ className }`}
             style={style}
             >
            {title ? title : product.title}
            </span>
    )
};