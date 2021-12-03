import { ProductCard as ProductCardHoc } from './ProductCard';
import { ProductCardHOCProps } from '../interfaces/inerfaces';


import { ProductImage } from './ProductImage';
import { ProductButtons } from './ProductButtons';
import { ProductTitle } from './ProductTitle';

export { ProductImage } from './ProductImage';
export { ProductButtons } from './ProductButtons';
export { ProductTitle } from './ProductTitle';


     
export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHoc,{
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons

})

export default ProductCard;