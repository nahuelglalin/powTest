import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './articles.css'; 

const ArticlesItem = ({img, productName, productColor, size, quantity  = 1, prices}) => {
    const [count, setCount] = useState(quantity);
    const [price, setPrice] = useState(prices * quantity);
    let tempPrice = prices;

    const handleIncrement = () => {
        setCount( count + 1);
        setPrice(price + tempPrice);
    };

    const handleDecrement = () => {
      count <= 0 ? setCount(count) : setCount(count - 1);
      count <= 0 ? setCount(count) : setPrice(price - tempPrice);
    };
    

    return (
        <div className="left-container borde mt-2 d-flex justify-content-between article">
            <img className="article-image" src={img} alt=""></img>
            <div className="product-name">
                <h6>{productName}</h6>
                <p>Color: {productColor}</p>
            </div>

            <p>{size}</p>

            <div className="quantity">
                <button className="quantity-btn quantity-btn-left" onClick={handleDecrement}>-</button>
                <p className="quantity-number">{count}</p>
                <button className="quantity-btn quantity-btn-right" onClick={handleIncrement}>+</button>
            </div>
            
            
            <p>$ {price} </p>

            <p>B</p>
           
        </div>
    )
}

ArticlesItem.propTypes = {
    quantity: PropTypes.number
}

export default ArticlesItem;