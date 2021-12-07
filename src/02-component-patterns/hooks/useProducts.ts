    import { useEffect, useRef, useState } from "react";
import { onChangeArgs, Product } from '../interfaces/inerfaces';


    interface useProductArgs {
        product: Product;
        onChange?:(args: onChangeArgs) => void;
        value?: number
    }


    export const useProducts = ({onChange, product, value = 0}: useProductArgs ) => {

    const [counter, setCounter] = useState(value);

    // console.log({value});
    const isControlled = useRef(!!onChange);

    // console.log('isControlled', isControlled.current);

    
    const increaseBy = (value:number) => {
        
        if (isControlled.current && onChange)
         { return onChange({count: value, product})};

         
        const newValue= Math.max(counter+value, 0);

        // setCounter( prev => Math.max(prev + value, 0));
        setCounter(newValue);
        onChange && onChange({count: newValue, product});
    };

    useEffect(() => {
       setCounter(value)
    }, [value])

    return {
        counter,
        increaseBy,
        
    }

}


