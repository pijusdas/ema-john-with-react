import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Cart = ({ cart , HandleClearCart,children}) => {
    // const {cart} = props.cart



    let totalPrice = 0;
    let totalSipping = 0;
    let quantity = 0;
    for (const product of cart) {

        product.quantity = product.quantity || 1;

        totalPrice = totalPrice + product.price * product.quantity;
        totalSipping = totalSipping + product.shipping;
        quantity = quantity + product.quantity;
    }

    const tax = totalPrice * 7 / 100;

    const grantotal = totalPrice + totalSipping + tax;

    return (
        <div className='cart'>
            <h1>Order Summery</h1>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping: ${totalSipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h6>Grand Total: ${grantotal}</h6>
            <button onClick={()=> HandleClearCart()} className='btn-clear-cart'>
                <span>Clear Cart</span>
                <FontAwesomeIcon icon={faTrashAlt} />
            </button>
            {children}
        </div>
    );
};

export default Cart;