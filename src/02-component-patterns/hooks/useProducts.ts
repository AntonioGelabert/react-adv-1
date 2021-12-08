    import { useEffect, useRef, useState } from "react";
import { onChangeArgs, Product, InitialValues } from '../interfaces/inerfaces';


    interface useProductArgs {
        product: Product;
        onChange?:(args: onChangeArgs) => void;
        value?: number;
        initialValues?: InitialValues;
    }


    export const useProducts = ({onChange, product, value = 0, initialValues}: useProductArgs ) => {

    const [counter, setCounter] = useState<number>( initialValues?.count || value );

    const isMounted = useRef(false);

    console.log(initialValues?.count);


    // console.log('isControlled', isControlled.current);

    
    const increaseBy = (value:number) => {
         
        let newValue= Math.max(counter+value, 0);

        if (initialValues?.maxCount) {
            newValue = Math.min( newValue, initialValues.maxCount)
        }

        // setCounter( prev => Math.max(prev + value, 0));
        setCounter(newValue);
        onChange && onChange({count: newValue, product});
    };

    useEffect(() => {
       if (!isMounted.current) return;

       setCounter(value)
    }, [value])

    // useEffect(() => {
    //     isMounted.current = true;
    //     }
    // }, [])
     const reset = () => {
          setCounter(initialValues?.count || value )

     }


    return {
        counter,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
        maxCount: initialValues?.maxCount,
        
        increaseBy,
        reset
        
    }

}


