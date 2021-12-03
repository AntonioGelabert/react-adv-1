
import styles from '../styles/styles.module.css'

import { useProducts } from '../hooks/useProducts';
import { createContext } from 'react';
import { ProductCardProps, ProductContextProps } from '../interfaces/inerfaces';






export const ProductContext = createContext({} as ProductContextProps);
const {Provider} = ProductContext; 






// interface ProductButtonsProps {
//     counter: number;
//     increaseBy: (value: number) => void;
    

// };



export const ProductCard = ({ children, product }: ProductCardProps) => {

    // const [counter, setCounter] = useState(0);
    //  const increaseBy = (value:number) => {
    //      setCounter( prev => Math.max(prev + value, 0))
    //  }

    const { counter, increaseBy } = useProducts();


    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>

        <div className={styles.productCard}>
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

