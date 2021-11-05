import React, { Fragment } from "react";
import { useMediaQuery } from 'react-responsive';
import './navbar.css';

export const Navbar = () => {

    const isMobile = useMediaQuery({ query: '(max-width: 992px)' })

    return (
        <nav className="navbar-expand-lg navbar-light backgound py-2">
            <div className="navbar-ico">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <svg width="20" height="52" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="1" width="17.8182" height="1.27273" rx="0.636364" fill="black" />
                        <rect x="1" y="7.36365" width="17.8182" height="1.27273" rx="0.636364" fill="black" />
                        <rect x="1" y="13.7273" width="17.8182" height="1.27273" rx="0.636364" fill="black" />
                    </svg>

                </button>
                {isMobile &&
                    <div className="search-ico">
                        <div className="fas shop-ico">
                            <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="11.9947" y="11.3246" width="7.109" height="1.12132" rx="0.560658" transform="rotate(45.2444 11.9947 11.3246)" fill="black" />
                                <circle cx="7.07788" cy="7.07788" r="6.57788" stroke="black" />
                            </svg>
                        </div>
                    </div>
                }
            </div>

            <div className="d-flex justify-content-center navbar-logo">
                <div className="navbar-logo">
                    <div className="navbar-brand d-flex justify-content-center">
                        <div className="h2 logo-font">
                            <svg width="76" height="27" viewBox="0 0 76 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_9:173)">
                                    <path d="M0 26.5405V25.0827C2.75051 24.9679 3.06056 24.7758 3.06056 22.8189V3.71963C3.06056 1.76474 2.75051 1.57262 0 1.45775V0H12.0022C15.1408 0 17.6573 0.306998 19.5556 1.45775C21.454 2.60849 22.8482 4.71787 22.8482 7.78587C22.8482 10.6241 21.802 12.6959 19.8657 14.0764C18.0833 15.342 15.2168 15.9936 11.5761 15.9936H9.25771V22.8189C9.25771 24.7758 9.56776 24.9679 12.9764 25.16V26.5464L0 26.5405ZM9.25771 12.579C9.25771 14.0368 9.91783 14.2289 11.4281 14.2289C15.3388 14.2289 16.347 10.8162 16.347 7.90075C16.347 3.48988 14.1466 1.76078 11.5461 1.76078C9.56977 1.76078 9.2597 2.10541 9.2597 3.17892L9.25771 12.579Z" fill="#231F20" />
                                    <path d="M42.8799 17.1444C42.8799 23.2843 39.8974 27 32.8781 27C25.8288 27 22.8463 23.2804 22.8463 17.1444C22.8463 11.0084 25.8288 7.28674 32.8781 7.28674C39.8974 7.28674 42.8799 11.0084 42.8799 17.1444ZM32.8781 25.2352C35.5886 25.2352 36.7128 22.2821 36.7128 17.1444C36.7128 12.0066 35.5966 9.05743 32.8861 9.05743C30.1356 9.05743 29.0114 12.0106 29.0114 17.1503C29.0114 22.29 30.1356 25.2352 32.8861 25.2352H32.8781Z" fill="#231F20" />
                                    <path d="M51.7475 7.74823V9.20399L50.6633 9.32085C49.8892 9.39611 49.7351 9.70311 49.9672 10.5469L52.9097 21.0937H53.0257L56.6264 7.74823H60.6932L64.6839 21.0937H64.8379C65.8061 17.489 67.0843 12.6186 67.4384 10.7013C67.5544 9.97248 67.4764 9.5506 66.7783 9.43573L65.114 9.20399V7.74823H73.1314V9.20399C71.1571 9.35848 70.885 9.62587 70.3049 11.1232C69.7228 12.5097 68.9047 14.9201 68.1045 17.5662L65.316 26.5405H61.0552L57.1765 14.7656H57.0225L53.4978 26.5405H49.237L45.9744 16.3858C45.2003 13.9714 44.9743 13.2029 44.1161 10.8638C43.652 9.56051 43.2239 9.36839 41.6757 9.2139V7.75813L51.7475 7.74823Z" fill="#231F20" />
                                    <path d="M70.2029 24.0667C70.2029 22.3811 71.3691 21.165 73.1035 21.165C74.8678 21.165 76.002 22.3811 76.002 24.0667C75.938 25.7819 74.8678 26.9683 73.1035 26.9683C71.3791 26.9683 70.2029 25.7819 70.2029 24.0667Z" fill="#231F20" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_9:173">
                                        <rect width="76" height="27" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
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
            {!isMobile ?
                <div className="shop d-flex mx-4">

                    <div className="fas shop-ico">
                        <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="11.9947" y="11.3246" width="7.109" height="1.12132" rx="0.560658" transform="rotate(45.2444 11.9947 11.3246)" fill="black" />
                            <circle cx="7.07788" cy="7.07788" r="6.57788" stroke="black" />
                        </svg>
                    </div>

                    {/* <i className="far fa-user shop-ico"></i> */}
                    <div className="far shop-ico">
                        <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.5 17.2666C0.5 13.8609 3.26091 11.1 6.66667 11.1H8.33333C11.7391 11.1 14.5 13.8609 14.5 17.2666C14.5 17.7269 14.1269 18.1 13.6667 18.1H1.33333C0.873096 18.1 0.5 17.7269 0.5 17.2666Z" stroke="black" />
                            <circle cx="7.49988" cy="5.09998" r="4" stroke="black" />
                        </svg>
                    </div>



                    <div className="cart shop-ico">
                        <p>2</p>
                    </div>

                </div>

                : <Fragment>
                    <div className="cart shop-ico">
                        <p>2</p>
                    </div>
                    <div className="circle">
                        <p>--</p>
                    </div>
                </Fragment>

            }
        </nav>
    );
};
