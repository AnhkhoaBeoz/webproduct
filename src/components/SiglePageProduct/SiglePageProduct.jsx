import React, {useState} from 'react';
import './SinglePageProduct.scss';
import {useParams} from "react-router-dom";
import useData from "../../hooks/useData.js";
import Loading from "../Loading/Loading.jsx";

function SinglePageProduct() {
    const [quantity, setQuantity] = useState(1);
    const {id} = useParams();
    const {data, error, isLoading} = useData(`/products/${id}`);

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const addToCart = () => {
        // Implement your logic to add the product to the cart
        if (data) {
            console.log(`Added ${quantity} ${data.title}(s) to the cart.`);
        }
    };

    return (
        <>
            {error && <em className="form_error">{error}</em>}
            {isLoading && <Loading/>}
            {data &&
                <div className="single_product">
                    <div className="single_product_contain">
                        <div className="single_product_thumbnails">
                            {data.images.map((item, index) => (
                                <img key={index} src={`http://localhost:5000/products/${item}`} alt={data.title}/>
                            ))}
                        </div>
                        <img src={`http://localhost:5000/products/${data.images[0]}`} alt=""
                             className='single_product_display'/>
                    </div>
                    <div className="single_product_details">
                        <h2 className="single_product_title">
                            {data.title}
                        </h2>
                        <p className="single_product_description">
                            {data.description}
                        </p>
                        <h3 className="single_product_price">${data.price}</h3>
                        <div className="single_product_quantity">
                            <h3 className="quantity_heading">QUANTITY : </h3>
                            <button className="quantity_button" onClick={decreaseQuantity}>-</button>
                            <span className="quantity_value">{quantity}</span>
                            <button className="quantity_button" onClick={increaseQuantity}>+</button>
                        </div>
                        <button className="add_to_cart_button" onClick={addToCart}>Add to Cart</button>
                    </div>
                </div>
            }
        </>
    );
}

export default SinglePageProduct;
