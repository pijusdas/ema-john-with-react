import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/product';
import './Shop.css';

const Shop = () => {
    const [products,setproducts] = useState([]);
    const [cart,setCart]=useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data => setproducts(data))
    },[])

    const addToCart = (product)=>{
        const newcart = [...cart,product];
        setCart(newcart)
    }

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product
                    key={product.id}
                    product={product}
                    addToCart={addToCart}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart ={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;