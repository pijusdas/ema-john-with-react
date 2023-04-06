import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './ReviewContainer.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Order = () => {

    const savedCart = useLoaderData();
    const [cart,setCart] = useState(savedCart)

    // console.log(savedCart)

    const handleRemoveCart =(id)=>{
       const remaining =  cart.filter(product => product.id !== id);
       console.log(remaining,id)
       setCart(remaining)
        removeFromDb(id)
    }

    const HandleClearCart = ()=> {
        setCart([])
        console.log('why')
        deleteShoppingCart()
    }


    return (
        <div className='shop-container'>
            <div className='review-container'>
                 {
                    cart.map(product => <ReviewItem
                    key={product.id}
                    product={product}
                    handleRemoveCart={handleRemoveCart}
                    ></ReviewItem>)
                 }
            </div>
            <div className='cart-container'>
                <Cart 
                HandleClearCart={HandleClearCart}
                cart={cart}>
                    <button className='proceed-btn'>Proceed Checkout</button>
                </Cart>
            </div>
        </div>
    );
};

export default Order;