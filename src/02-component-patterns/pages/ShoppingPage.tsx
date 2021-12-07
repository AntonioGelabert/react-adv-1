import '../styles/customs-styles.css';
import { ProductButtons, ProductCard, ProductTitle } from '../components';
import { ProductImage } from '../components/ProductImage';
import { useShoppingCart } from '../hooks/useShoppingCart';




export const ShoppingPage = () => {


    const { products, ShoppingCart, onProductCountChange } = useShoppingCart();





    return (
        <div>
            <h1>Shoping Store</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'


            }}>




                {
                    products.map(product => (

                        <ProductCard
                            product={product}
                            key={product.id}
                            className="bg-dark"
                            onChange={onProductCountChange}
                            value={ShoppingCart[product.id]?.count || 0}
                        >
                            <ProductImage className="custom-image" />
                            <ProductTitle className="text-white text-bold" />
                            <ProductButtons className="custom-buttons" />
                        </ProductCard>)

                    )


                }

            </div>
            <div className="shoping-cart">
                {
                    Object.entries(ShoppingCart).map(([key, product]) => (


                        <ProductCard
                            product={product}
                            key={product.id}
                            className="bg-dark"
                            style={{ width: '100px' }}
                            onChange={onProductCountChange}
                            value={product.count}
                        >
                            <ProductImage className="custom-image" />
                            <ProductTitle className="text-white text-bold" />
                            <ProductButtons
                                className="custom-buttons"
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center'

                                }}
                            />
                        </ProductCard>




                    ))
                }




            </div>
            <div>
                <code>
                    {JSON.stringify(ShoppingCart, null, 5)}
                </code>
            </div>
        </div>
    )



}
