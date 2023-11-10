import React from "react";

import mystyles from './Offer.module.css';

const Offer = (props) => {
    return (
        <article className={mystyles.offer}>
            <span className={mystyles['offer-icon']}><i className={props.icon}></i></span>
            <div className={mystyles['offer-info']}>
                <h4 className={mystyles['offer-title']}>{props.title}</h4>
                <p className={mystyles['offer-text']}>{props.text}</p>
            </div>
        </article>
    );
};

export default Offer;