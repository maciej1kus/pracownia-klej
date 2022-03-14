import React, { useContext } from 'react';
import { ProductsContext } from "../global/ProductsContext";
import { CartContext } from "../global/CartContext";


export const Products = () => {

    const { products } = useContext(ProductsContext);

    const { dispatch } = useContext(CartContext);

    return (
        <>
            {products.length !== 0 && <h1>Produkty</h1>}
            <div className='products-container'>
                {products.length === 0 && <div>Trwa wczytywanie produktów...</div>}
                {products.map(product => (
                    <div className='product-card' key={product.ProductID}>
                        <div className='product-img'>
                            <img src={product.ProductImg} alt="product" />
                        </div>
                        <div className='product-name'>
                            {product.ProductName}
                        </div>
                        <div className='product-price'>
                            PLN {product.ProductPrice.toFixed(2)}
                        </div>
                        <button className='addcart-btn'
                                onClick={() => dispatch({ type: 'ADD_TO_CART', id: product.ProductID, product })}>
                            Dodaj do koszyka
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
}

