import React from 'react';
import './styles/NotFoundPage.css'
import Image from '../images/404Error-rafiki.svg';

function NotFoundPage () {
    return(
        <div className="notFound">
            <img src={Image}></img>
        </div>
    )
}

export default NotFoundPage;