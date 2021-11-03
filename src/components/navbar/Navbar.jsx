import React from "react";

export const Navbar = () => {
    return (
        <nav className="navbar-expand-lg navbar-light backgound">
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="d-flex justify-content-center">
                <div className="">

                    <div className="navbar-brand d-flex justify-content-center mt-2">
                        <p className="h2 logo-font"> Pow. </p>
                    </div>

                    <div className="collapse navbar-collapse mb-4" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                    Sale
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active active-link" href="#">
                                    Colección
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">
                                    Gift Cards
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
            {/* carrito */}
            <div className="shop">
                    <p>A</p>
                    <p>B</p>
                    <p>C</p> 
            </div>
        </nav>
    );
};
