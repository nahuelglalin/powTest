import React from 'react'
import { cssClassName } from "../util/cssClassName";
import { useMediaQuery } from 'react-responsive';

import './services.css'

export const Services = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 861px)' })

    return (
        <div className={cssClassName({"my-3 mx-3": isMobile})}>
            <div className="d-flex services">
                <div className="services-content mt-2">
                    <div className="d-flex">
                        {/* <i class="fas fa-box-open services-ico"></i> */}
                        <div className="services-ico">
                            <svg width="66" height="66" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.5 42.2927V14.9606L26.1202 19.9293L26.4912 47.3554L6.5 42.2927ZM47.5 42.2927L27.4914 47.3598L27.1203 19.9302L47.5 14.9549V42.2927ZM26.6172 19.0236L8.03669 14.3182L27 9.51578L45.9282 14.3093L26.6172 19.0236Z" stroke="black"/>
                                <path d="M37 17H38V29.0279L37 29.5L37 17Z" fill="black"/>
                            </svg>
                        </div>
                        <div>
                            <h5 className="services-title mx-3">ENVÍOS</h5>
                            <p className="services-subtitle mx-3">Envíos a todo el país</p>
                        </div>
                    </div>

                </div>
                <div className="services-content mt-2">
                    <div className="d-flex">
                        <div className="services-ico">
                            <svg width="44" height="44" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.76844 9.93327C2.54749 10.1542 2.54749 10.5125 2.76844 10.7334L6.36911 14.3341C6.59006 14.555 6.9483 14.555 7.16925 14.3341C7.39021 14.1131 7.39021 13.7549 7.16925 13.5339L3.96867 10.3333L7.16925 7.13276C7.39021 6.9118 7.39021 6.55356 7.16925 6.33261C6.9483 6.11165 6.59006 6.11165 6.36911 6.33261L2.76844 9.93327ZM31.8352 10.8991C32.1477 10.8991 32.401 10.6458 32.401 10.3333C32.401 10.0209 32.1477 9.76755 31.8352 9.76755V10.8991ZM3.16852 10.8991H31.8352V9.76755H3.16852V10.8991Z" fill="black"/>
                                <path d="M32.2338 25.0667C32.4547 24.8458 32.4547 24.4875 32.2338 24.2666L28.6331 20.6659C28.4121 20.445 28.0539 20.445 27.8329 20.6659C27.612 20.8869 27.612 21.2451 27.8329 21.4661L31.0335 24.6667L27.8329 27.8672C27.612 28.0882 27.612 28.4464 27.8329 28.6674C28.0539 28.8883 28.4121 28.8883 28.6331 28.6674L32.2338 25.0667ZM3.16701 24.1009C2.85453 24.1009 2.60122 24.3542 2.60122 24.6667C2.60122 24.9791 2.85453 25.2324 3.16701 25.2324L3.16701 24.1009ZM31.8337 24.1009L3.16701 24.1009L3.16701 25.2324L31.8337 25.2324L31.8337 24.1009Z" fill="black"/>
                            </svg>
                        </div>
                        <div>
                            <h5 className="services-title me-3 ms-1">CAMBIOS Y DEVOLUCIONES</h5>
                            <p className="services-subtitle me-3 ms-1">Es gratis y muy sencillo</p>
                        </div>
                    </div>

                </div>
                <div className="services-content mt-2">
                    <div className="d-flex services-text">
                            <div className="services-ico">
                                <svg width="55" height="45" viewBox="0 0 41 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="1.94434" y="2.38892" width="37.1111" height="26.2222" rx="2.22222" stroke="black"/>
                                    <line x1="2" y1="9.5" x2="39" y2="9.5" stroke="black"/>
                                    <line x1="25.9447" y1="20.4445" x2="34.1114" y2="20.4445" stroke="black"/>
                                </svg>
                            </div>
                        <div>
                            <h5 className="services-title mx-3">MEDIOS DE PAGO</h5>
                            <p className="services-subtitle mx-3">100% seguros</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
