import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    // const {cart} = props.cart
     
    let totalPrice = 0;
    let totalSipping =0;
    for(const product of cart){
        totalPrice = totalPrice + product.price
        totalSipping = totalSipping + product.shipping
    }

    const tax = totalPrice*7/100;

    const grantotal = totalPrice+totalSipping+tax;

    return (
        <div className='cart'>
            <h1>Order Summery</h1>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping: ${totalSipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h6>Grand Total: ${grantotal}</h6>
        </div>
    );
};

export default Cart;