import React from 'react';
import './ProductCard.scss'
import NavBarLinkIcon from "../Navbar/NavBarLinkIcon.jsx";
import Star from '../../assets/images/glowing-star.png'
import Cart from '../../assets/images/basket.png'
import {NavLink} from "react-router-dom";

function ProductCard({item}) {
    return (
        <div className='product_card'>
            <NavLink to={`/products/${item._id}`}>
                <div className="product_card_img">
                    <img src={`http://localhost:5000/products/${item.images[0]}`} alt="" className="card_img"/>
                </div>
            </NavLink>
            <div className="product_card_body">
                <p className="product_card_price">{item.price} $</p>
                <p className="product_card_title">
                    {item.title}
                </p>
            </div>
            <div className="product_card_footer">
                <div className="product_card_rating">
                    <NavBarLinkIcon title={item.reviews.rate} iconPath={Star}/>
                </div>
                {item.stock > 0 && <button className="product_card_buy">
                    <NavBarLinkIcon title="" iconPath={Cart}/>
                </button>}
            </div>
        </div>
    );
}

export default ProductCard;