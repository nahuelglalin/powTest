import React from 'react';
import './buy-buttons.css';

export const BuyButtons = () => {
    return (
        <div>
            <p className="borde mt-3 d-flex justify-content-center free-text">¡Tu envío es gratis!</p>
            <button className="btn-complete">Completar compra</button>
            <button className="btn-continue mt-2">Seguir comprando</button>
        </div>
    )
}
