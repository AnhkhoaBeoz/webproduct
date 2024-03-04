import React from 'react';

import './ProductLink.scss'
import {Link} from "react-router-dom";

function ProductLink({ title, iconPath, link }) {
    return (
        <Link className="product-link" to={`/products?category=${link}`}>
            <img src={iconPath} alt="" className="icon_emoji"/>
            <span className="icon_title">{title}</span>
        </Link>
    );
}

export default ProductLink;
