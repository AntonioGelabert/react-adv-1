
import styles from '../styles/styles.module.css'

import { useProducts } from '../hooks/useProducts';
import { createContext, ReactElement } from 'react';
import { Product, ProductContextProps, onChangeArgs } from '../interfaces/inerfaces';






export const ProductContext = createContext({} as ProductContextProps);
const {Provider} = ProductContext; 






// interface ProductButtonsProps {
//     counter: number;
//     increaseBy: (value: number) => void;
    

// };
export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: React.CSSProperties;
    onChange?: (ars:onChangeArgs) => void;
    value?: number;


};



export const ProductCard = ({ children, product, className, style, onChange, value }: Props) => {

    // const [counter, setCounter] = useState(0);
    //  const increaseBy = (value:number) => {
    //      setCounter( prev => Math.max(prev + value, 0))
    //  }

    const { counter, increaseBy } = useProducts({onChange, product, value});


    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>

        <div className={`${styles.productCard} ${className}`}
            style={style}
            >
            {/* <img className={styles.productImg} src="./coffee-mug.png" alt="Coffee Mug"/> */}

            {/* <ProductImage img={product.img} />
            <ProductTitle title={product.title} />
        <ProductButtons counter={counter} increaseBy={increaseBy } /> */}

            {children}


           
        </div>
        </Provider>
    )
}

// ProductCard.Title = ProductTitle;
// ProductCard.Image = ProductImage;
// ProductCard.Buttons = ProductButtons;

