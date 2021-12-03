import React from 'react'
import { ProductButtons, ProductCard, ProductTitle } from '../components';
import { ProductImage } from '../components/ProductImage';

const product = {
    id: '1',
    title: 'Coffee Mug - Casrd',
    img: './coffee-mug.png'
}

export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shoping Store</h1>
            <hr />
            <div style={{
               display: 'flex',
               flexDirection: 'row',
               flexWrap: 'wrap'


            }}>
            <ProductCard product={product} >
                <ProductCard.Image />
                <ProductCard.Title title={'Hola mundo'} />
                <ProductButtons />
             </ProductCard>

            <ProductCard product={product} >
                <ProductImage/>
                <ProductTitle/>
                <ProductButtons />
             </ProductCard>
        

            </div>
        </div>
    )
}
