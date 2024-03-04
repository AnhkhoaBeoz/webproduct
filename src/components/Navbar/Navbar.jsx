import React from 'react';
import './Navbar.scss'
import NavBarLinkIcon from "./NavBarLinkIcon.jsx";
import Rocket from '../../assets/images/rocket.png'
import Star from '../../assets/images/glowing-star.png'
import ID from '../../assets/images/id-button.png'
import Lock from '../../assets/images/locked.png'
import Package from '../../assets/images/package.png'
import Memo from '../../assets/images/memo.png'
import Cart from '../../assets/images/basket.png'

function Navbar() {
    return (
        <nav className='navbar'>
            <div className="navbar_left">
                <h3 className="navbar_left_heading">CART WISH</h3>
                <div className="navbar_search">
                    <input type="text" className="input_search" placeholder='Search Product'/>
                    <button type='submit' className="search_submit">Submit</button>
                </div>
            </div>
            <div className="navbar_right">
                <NavBarLinkIcon link='/' title="Home" iconPath={Rocket}/>
                <NavBarLinkIcon link='/products' title="Products" iconPath={Star}/>
                <NavBarLinkIcon link='/login' title="Login" iconPath={ID}/>
                <NavBarLinkIcon link='/signup' title="SignUp" iconPath={Memo}/>
                <NavBarLinkIcon link='/myorder' title="MyOrder" iconPath={Package}/>
                <NavBarLinkIcon link='/logout' title="LogOut" iconPath={Lock}/>
                <NavBarLinkIcon link='/cart' title="Cart" iconPath={Cart}/>
            </div>
        </nav>
    );
}

export default Navbar;