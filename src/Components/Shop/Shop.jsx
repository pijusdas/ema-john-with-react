import React, { useEffect, useState } from 'react';
import Product from '../Product/product';
import './Shop.css';

const Shop = () => {
    const [products,setproducts] = useState([]);
    const [Cart,setCart]=useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data => setproducts(data))
    },[])

    const addToCart = (product)=>{
        const newcart = [...Cart,product];
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
                <h1>Cart container</h1>
                <p>Lenght: {Cart.length}</p>
            </div>
            
        </div>
    );
};

export default Shop;