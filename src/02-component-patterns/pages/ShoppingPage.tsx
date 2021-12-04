import '../styles/customs-styles.css';
import { ProductButtons, ProductCard, ProductTitle } from '../components';
import { ProductImage } from '../components/ProductImage';
import React from 'react'
import { readBuilderProgram } from 'typescript';

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
            <ProductCard product={product} 
            className="bg-dark"
             >
                <ProductCard.Image className="custom-image" />
                <ProductCard.Title title={'Hola mundo'} className="custom-buttons" />
                <ProductButtons className="custom-buttons" />
             </ProductCard>

            <ProductCard product={product}
             className="bg-dark"
             >
                <ProductImage className="custom-image"/>
                <ProductTitle className="text-white text-bold"/>
                <ProductButtons className="custom-buttons" />
             </ProductCard>
        
            <ProductCard 
                product={product}
                style={
                {
                    backgroundColor: '#70D1F8'
                }
                }

             >
                <ProductImage style={{boxShadow: '10px 10px 10px 10px rgba(0,0,0,0.2)'}} />
                <ProductTitle style={{
                    fontWeight:'bold',
                }} />
                <ProductButtons style={{
                    display: 'flex',
                    justifyContent: 'end'
                }} />
             </ProductCard>
        

            </div>
        </div>
    )
}
