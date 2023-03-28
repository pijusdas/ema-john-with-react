import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
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

    useEffect(()=>{
        // step:1 get the id
        const storedCart = getShoppingCart();
        const savedcart = [];
         // step-2: get the product by using id 
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id);
            console.log(addedProduct)

           if(addedProduct){
             // step 3 add quantity
             const quantity = storedCart[id];
             addedProduct.quantity = quantity;
            //  step 4 add the added product to saved cart
             savedcart.push(addedProduct)
           }
        }
        // step 5: set the cart
        setCart(savedcart)
    },[products])


    const addToCart = (product)=>{
        const newcart = [...cart,product];
        setCart(newcart);
        addToDb(product.id)
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