import React, {useEffect, useState} from 'react';
import './ProductPage.scss'
import ProductSideBar from "./ProductSideBar.jsx";
import ProductPageList from "./ProductPageList.jsx";
import axios from "../../utils/api-client.js";

function ProductPage() {

    return (
        <div className='product_page'>
            <section className="product_page_sidebar">
                <ProductSideBar/>
            </section>
            <div className="product_page_list">
                <ProductPageList/>
            </div>
        </div>
    );
}

export default ProductPage;