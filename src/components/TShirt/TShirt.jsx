import React from 'react';
import './Tshirt.css';

const TShirt = ({tshirt, handleAddToCart}) => {
    const {picture, name, price} = tshirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <h5>Price: ${price}</h5>
            <button onClick={()=>handleAddToCart(tshirt)} className='buy-now-btn'>Buy Now</button>
        </div>
    );
};

export default TShirt;