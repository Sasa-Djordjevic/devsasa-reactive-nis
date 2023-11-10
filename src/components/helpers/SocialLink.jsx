import React from "react";

import mystyles from './SocialLink.module.css';

const SocialLink = (props) => {
    const linkClass = props.name;

    return (
        <li>
            <a href={props.info.href} target="_blank" rel="noreferrer" className={mystyles[linkClass]}>
                <i className={props.info.icon}></i>
            </a>
        </li>
    );
};

export default SocialLink;