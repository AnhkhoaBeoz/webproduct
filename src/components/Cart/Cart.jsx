import React from 'react';
import './Cart.scss'
import User from '../../assets/images/user.webp'
import Table from "../../Common/Table.jsx";

function Cart() {
    return (
        <div className="cart_page">
            <div className="user_info">
                <img src={User} alt="" className="avatar_user"/>
                <div className="user_info_body">
                    <h3 className="user_name">Khoa Beo</h3>
                    <p className="user_email">anhkhoa18090@gmail.com</p>
                </div>
            </div>
            <Table headings={["Item", "Price", "Quantity", "Total", "Remove"]}
            >
                <tbody>
                <tr>
                    <td>Iphone 14 pro max</td>
                    <td>$999</td>
                    <td>222</td>
                    <td>222</td>
                    <td>Remove</td>
                </tr>
                </tbody>
            </Table>
            <div className="cart_bill">
                <div className="cart_bill_table">
                    <tbody>
                    <tr>
                        <td>SubTotal</td>
                        <td>$999</td>
                    </tr>
                    <tr>
                        <td>SubTotal</td>
                        <td>$999</td>
                    </tr>
                    <tr className='cart_bill_final'>
                        <td>Total</td>
                        <td>$1004</td>
                    </tr>

                    </tbody>
                </div>
                <button className="check_out_button">CHECK OUT</button>
            </div>
        </div>
    );
}

export default Cart;