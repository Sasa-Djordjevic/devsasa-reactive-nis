import React from "react";

import mystyles from './PageLink.module.css';

const PageLink = (props) => {
    const linkClass = props.name;

    return (
        <li>
            <a href={props.info.href} className={mystyles[linkClass]} onClick={props.closeHandler}>{props.info.text}</a>
        </li>
    );
};

export default PageLink;