import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({product,handleRemoveCart}) => {
    const {id,name,img,quantity,price}=product
    return (
        <div className='review-item'>
             <img src={img} alt="" />
             <div className='review-details'>
                <p className='product-title'>{name}</p>
                <p>Price: <span className='text-orange'>${price}</span></p>
                <p>Quantity: <span className='text-orange'>{quantity}</span></p>
             </div>
             <button onClick={()=> handleRemoveCart(id)} className='btn-delete'>
             <FontAwesomeIcon className='delete-icon' icon={faTrashAlt} />
             </button>
        </div>
    );
};

export default ReviewItem;