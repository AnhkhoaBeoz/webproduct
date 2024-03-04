import React from 'react';


import {Route, Routes} from "react-router-dom";
import Home from "../components/Home/Home.jsx";
import ProductPage from "../components/ProductPage/ProductPage.jsx";
import SinglePageProduct from "../components/SiglePageProduct/SiglePageProduct.jsx";
import LoginPage from "../components/Authentication/LoginPage.jsx";
import SignupPage from "../components/Authentication/SignupPage.jsx";
import MyOrderPage from "../components/MyOrderPage/MyOrderPage.jsx";
import Cart from "../components/Cart/Cart.jsx";

function Routing() {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/products' element={<ProductPage/>}/>
            <Route path='/products/:id' element={<SinglePageProduct/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/signup' element={<SignupPage/>}/>
            <Route path='/myorder' element={<MyOrderPage/>}/>
            <Route path='/cart' element={<Cart/>}/>
        </Routes>
    );
}

export default Routing;