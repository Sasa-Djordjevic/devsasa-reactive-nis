import React from "react";

import mystyles from './Tour.module.css';

const Tour = (props) => {
    return (
        <article className={mystyles["tour-card"]}>
            <div className={mystyles["tour-img-container"]}>
                <img src={props.info.image} className={mystyles["tour-img"]} alt={props.info.title} />
                <p className={mystyles["tour-date"]}>{props.info.date}</p>
            </div>
            <div className={mystyles["tour-info"]}>
                <div className={mystyles["tour-title"]}>
                    <h4>{props.info.title}</h4>
                </div>
                <p>{props.info.text}</p>
                <div className={mystyles["tour-footer"]}>
                    <p><span><i className="fas fa-map"></i></span> {props.info.location}</p>
                    <p>{props.info.days}</p>
                    <p>{props.info.price}</p>
                </div>
            </div>
        </article>
    );
};

export default Tour;