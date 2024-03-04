import React from 'react';
import './MyOrderPage.scss'
import Table from "../../Common/Table.jsx";

function MyOrderPage() {
    return (
        <section className="myorder_page">
            <Table headings={["Order", "Products", "Total", "Status"]}>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>IPHONE, POWWER </td>
                    <td>$123</td>
                    <td>SHIPPED</td>
                </tr>
                </tbody>
            </Table>


        </section>
    );
}

export default MyOrderPage;