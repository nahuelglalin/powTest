import React, { useState } from 'react';
import './articles.css';
import { useMediaQuery } from 'react-responsive';
import { cssClassName } from "../util/cssClassName";


const ArticlesItem = ({ img, productName, productColor, size, quantity = 1, prices, discount = 0 }) => {
    const isMobile = useMediaQuery({ query: '(max-width: 1100px)' })

    const [count, setCount] = useState(quantity);
    const [price, setPrice] = useState(prices * quantity);
    let tempPrice = prices;

    const handleIncrement = () => {
        setCount(count + 1);
        setPrice(price + tempPrice);
    };

    const handleDecrement = () => {
        count <= 0 ? setCount(count) : setCount(count - 1);
        count <= 0 ? setCount(count) : setPrice(price - tempPrice);
    };


    return (
        <div className="left-container borde mt-2 d-flex justify-content-between article">

            <img className="article-image me-3" src={img} alt=""></img>

            {isMobile &&
                <div className="d-flex flex-column article-center-text">

                    <div className="product-name">
                        <h6>{productName}</h6>
                        <p>Color: {productColor}</p>

                        <p>Talle: {size}</p>

                        <div className="d-flex flex-row">
                            {discount ? <p className="product-price discount">${price + 2474} </p> : null}
                            <p className="product-price">${price} </p>
                        </div>




                    </div>
                    <div className="quantity">
                        <button className="quantity-btn quantity-btn-left" onClick={handleDecrement}>-</button>
                        <p className="quantity-number">{count}</p>
                        <button className="quantity-btn quantity-btn-right" onClick={handleIncrement}>+</button>
                    </div>
                </div>
            }


            {!isMobile &&
                <div className="product-name">
                    <h6>{productName}</h6>
                    <p>Color: {productColor}</p>
                </div>
            }

            {!isMobile && <p>{size}</p>}

            {!isMobile &&
                <div className="quantity">
                    <button className="quantity-btn quantity-btn-left" onClick={handleDecrement}>-</button>
                    <p className="quantity-number">{count}</p>
                    <button className="quantity-btn quantity-btn-right" onClick={handleIncrement}>+</button>
                </div>

            }

            {!isMobile ?
                <div className="d-flex">
                    {discount ? <p className="product-price discount">${price + 2474} </p> : null}
                    <p className="product-price">$ {price} </p>
                </div>
                : null
            }

            <div className={cssClassName({ "d-flex mt-1": isMobile })}>

                <div className="far">
                    <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.67891 14.8005H3.32104L2.39288 4.97755H10.6071L9.67891 14.8005Z" stroke="#1D1D1B" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M10.8856 4.97758H2.11447C1.60398 4.97758 1.18631 4.55255 1.18631 4.03307C1.18631 3.51359 1.60398 3.08856 2.11447 3.08856H10.8856C11.396 3.08856 11.8137 3.51359 11.8137 4.03307C11.8137 4.55255 11.4424 4.97758 10.8856 4.97758Z" stroke="#1D1D1B" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M7.03366 3.08854H5.82705C5.31657 3.08854 4.8989 2.66351 4.8989 2.14403C4.8989 1.62455 5.31657 1.19952 5.82705 1.19952H7.03366C7.54414 1.19952 7.96181 1.62455 7.96181 2.14403C7.96181 2.66351 7.54414 3.08854 7.03366 3.08854Z" stroke="#1D1D1B" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M4.99173 7.33885L5.54862 12.392" stroke="#1D1D1B" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M7.96188 7.33885L7.40498 12.392" stroke="#1D1D1B" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>

            </div>


        </div>
    )
}



export default ArticlesItem;