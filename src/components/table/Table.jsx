import React from 'react';
import './table.css'

export const Table = () => {
    return (
        <div className="table-articles d-flex justify-content-between mt-3">
            <div class="col-5">
                <p>ART.</p>
            </div>
            <div class="col-2">
                <p>Talle</p>
            </div>
            <div class="col-2">
                <p>Cant.</p>
            </div>
            <div class="col-2">
                <p>Precio</p>
            </div>
            <div class="col-2">
                <p>Borrar</p>
            </div>

        </div>
    )
}
