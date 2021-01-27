import React from 'react';
import './styles/Footer.css';

const Footer = ({ increment, decrement, numberPage }) => {
    return(
        <footer>
            <div className="contenedor">
                <div className="buttonStyle">
                        <button type="button" class="btn btn-dark btn-sm" onClick={decrement} >Anterior</button>
                </div>
                <div className="buttonStyle">
                    <button class="btn btn-dark mb-3 btn-sm">
                        Page Number <span class="badge badge-light">{numberPage}</span>
                    </button>
                </div>
                <div className="buttonStyle">
                    <button type="button" class="btn btn-dark btn-sm" onClick={increment} >Siguiente</button>
                </div>
            </div>
        </footer>
    )
}

export default Footer;