import React from 'react';
import { cssClassName } from "../util/cssClassName";
import { useMediaQuery } from 'react-responsive';

import './buy-buttons.css';

export const BuyButtons = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 861px)' })

    return (
        <div className={cssClassName({"my-3 mx-3": isMobile})}>
            <p className="borde mt-3 d-flex justify-content-center free-text">¡Tu envío es gratis!</p>
            <button className="btn-complete">Completar compra</button>
            <button className="btn-continue mt-2">Seguir comprando</button>
        </div>
    )
}
