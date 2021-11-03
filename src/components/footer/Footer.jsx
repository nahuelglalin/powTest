import React from 'react';
import './footer.css';

export const Footer = () => {
    return (
        <div className="footer mt-4 d-flex align-items-center">
            <div className="container d-flex justify-content-between  footer-content"> 
                <div className="d-flex">
                    <div className="mx-2">
                        <i className="fab fa-instagram"></i>
                    </div>
                   <div>
                        <i className="fab fa-facebook-f"></i>
                   </div>
                </div>
                <div className="d-flex justify-content-between">
                    <p className="footer-text">Faqs</p>
                    <p className="footer-text">Nosotros</p>
                    <p className="footer-text">Locales</p>
                    <p className="footer-text">Contacto</p>
                </div>
                <div>
                    <p className="logo-font">Pow</p>
                </div>


            </div>
           
        </div>
    )
}
