import React from 'react';
import './ProductSideBar.scss'
import ProductLink from "./ProductLink.jsx";
import useData from "../../hooks/useData.js";
import Loading from "../Loading/Loading.jsx";


function ProductSideBar() {
    const {data, error, loading} = useData('/category');
    return (
        <div>
            <h2 className='product_sidebar_heading'>CATEGORY</h2>
            <div className="product_sidebar_link">
                {error && <em className="form_error">{error}</em>}
                {loading && <Loading/>}
                {data && data.map(item => (
                    <ProductLink key={item._id} title={item.name} link={item.name}
                                 iconPath={`http://localhost:5000/category/${item.image}`}/>
                ))}

            </div>
        </div>
    );
}

export default ProductSideBar;