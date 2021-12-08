import '../styles/customs-styles.css';
import { ProductButtons, ProductCard, ProductTitle } from '../components';
import { ProductImage } from '../components/ProductImage';
import { products } from '../data/product';
import { count } from 'console';



const product = products[0];

export const ShoppingPage = () => {


    return (
        <div>
            <h1>Shoping Store</h1>
            <hr />
           

                        <ProductCard
                            product={product}
                            key={product.id}
                            className="bg-dark"
                            initialValues={{
                                count: 4,
                                maxCount: 10   
                            }}
                            >
                            {
                                ({reset, isMaxCountReached, maxCount,increaseBy, count }) => (
                                   <>
                                <ProductImage className="custom-image" />
                                <ProductTitle className="text-white text-bold" />
                                <ProductButtons className="custom-buttons" />

                                <button onClick={reset}>Reset</button>
                                <button onClick={() => increaseBy(-2)}>-2</button>
                                {
                                  (!isMaxCountReached && <button onClick={() => increaseBy(2)}>2</button>)  
                                }

                            
                                <span>{maxCount} {count}</span>
                                

                               
                                   </>
                                )
                            }
                            
                        </ProductCard>

    


            </div>
        
    )

}
