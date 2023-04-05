import { getShoppingCart } from "../../utilities/fakedb";

const CartProductLoader =  async()=>{
    const LoadedProduct = await fetch('products.json');
    const products = await LoadedProduct.json();


    const storedCart = getShoppingCart();
    const savedcart = [];
    console.log(storedCart)

    for(const id in storedCart){
        const addedProduct = products.find(pd => pd.id === id)
        if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedcart.push(addedProduct)
        }
    }

    return savedcart

}

export default CartProductLoader;