import React from 'react';
import './footer.css';
import { useMediaQuery } from 'react-responsive';

export const Footer = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 861px)' })

        return (
            <div className="footer mt-4 d-flex align-items-center">
                {isMobile ? 
                    <div className="container-lg d-flex justify-content-between footer-content">
                        <div>
                            <p className="logo-font mt-3">Pow</p>
                        </div>

                        <div className="d-flex justify-content-between footer-text-container">
                            <p className="footer-text my-2 mt-4">Faqs</p>
                            <p className="footer-text my-2">Nosotros</p>
                            <p className="footer-text my-2">Locales</p>
                            <p className="footer-text my-2">Contacto</p>
                        </div>

                        <div className="d-flex my-4">
                            <div className="mx-2 ">
                                <i className="fab fa-instagram"></i>
                            </div>
                            <div>
                                <i className="fab fa-facebook-f"></i>
                            </div>
                        </div>
                    </div>
                : 
                    <div className="container-lg d-flex justify-content-between footer-content">
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
                }
            </div>
        )
}
