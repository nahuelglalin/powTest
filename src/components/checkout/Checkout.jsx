import React from 'react';
import './checkout.css';

const Checkout = (props) => {

    

    return (
        <div className="borde checkout">
            <h5>Resumen</h5>
            <div className="d-flex justify-content-between mt-4">
                <div>
                <p>Subtotal</p>   
                <p>Envio</p>   
                <p>Total</p>   
                </div>
                <div>
                    <p>$500</p>
                    <p>Gratis</p>
                    <p>$500</p>
                </div>
            </div>
           
            

        </div>
    )
}

export default Checkout

