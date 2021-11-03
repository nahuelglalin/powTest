import React from 'react'
import './services.css'

export const Services = () => {
    return (
        <div className="d-flex  justify-content-between services">
            <div className="mt-2 mx-4">
                <div className="d-flex">
                    <i class="fas fa-box-open services-ico"></i>
                    <div>
                        <h5 className="services-title">ENVÍOS</h5>
                        <p className="services-subtitle">Envíos a todo el país</p>
                    </div>
                </div>

            </div>
            <div className="">
                <div className="d-flex">
                    <i class="fas fa-exchange-alt services-ico"></i>
                    <div>
                        <h5 className="services-title">CAMBIOS Y DEVOLUCIONES</h5>
                        <p className="services-subtitle">Es gratis y muy sencillo</p>
                    </div>
                </div>

            </div>
            <div className="mx-4">
                <div className="d-flex">
                    <i class="far fa-credit-card services-ico"></i>
                    <div>
                        <h5 className="services-title">MEDIOS DE PAGO</h5>
                        <p className="services-subtitle">100% seguros</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
