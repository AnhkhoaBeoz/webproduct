import React from 'react';

import './FutureProducts.scss'
import ProductCard from "../ProductCard/ProductCard.jsx";

function FuturedProducts() {
    return (
        <div className='future_products'>
            <h2 className="future_products_heading">Future Products</h2>
            <div className="future_product_list">
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
        </div>
    );
}

export default FuturedProducts;