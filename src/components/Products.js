import React, { useContext } from 'react';
import { ProductsContext } from "../global/ProductsContext";



export const Products = () => {

    const { products } = useContext(ProductsContext);

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
                            PLN {product.ProductPrice}.00
                        </div>
                        <button className='addcart-btn'>Dodaj do koszyka</button>
                    </div>
                ))}
            </div>
        </>
    );
}

