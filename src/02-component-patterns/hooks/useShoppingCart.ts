import { useState } from "react";
import { products } from "../data/product";
import { Product, ProductInCart } from "../interfaces/inerfaces";









 export const useShoppingCart = () => {




   

  
        const [ShoppingCart, setShoppingCart] = useState<{[Key: string]: ProductInCart}>({
            // '1': {...product, count: 10},
            // '2': {...product2, count: 2},
        });
         
        const onProductCountChange = ({count, product}: {count:number, product: Product}) => {
    
            console.log({count});
            
            setShoppingCart( (oldShoppingCart) => {
    
         
                

                if (count === 0 ) {
                    const { [product.id]: toDelete, ...rest} = oldShoppingCart;
                    return rest;
                }   
    
    
                
                return {
                    ...oldShoppingCart,
                    [product.id]: {...product, count}
                }
    
            })

           }

           return {

             products,
             ShoppingCart,

             onProductCountChange,



           }


}  