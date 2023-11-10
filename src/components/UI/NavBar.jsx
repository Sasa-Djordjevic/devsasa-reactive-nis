import React, { useState } from "react";

import mystyles from './NavBar.module.css';
import logo from '../../images/logo.png';
import { pageLinks } from "../../data";
import PageLink from "../helpers/PageLink";
import { socialLinks } from "../../data";
import SocialLink from "../helpers/SocialLink";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openHandler = () => {
        setIsOpen(!isOpen);
    };

    const closeHandler = () => {
        if(isOpen) {
            setIsOpen(false);
        }
    }

    return (
        <nav className={mystyles.navbar}>
            <div className={mystyles["nav-center"]}>
            <div className={mystyles["nav-header"]}>
                <div className={mystyles["nav-logo"]}>
                    <img src={logo} alt="backroads" />
                </div>
                <button 
                    type="button" 
                    className={`${mystyles["nav-toggle"]} ${!isOpen ? mystyles["nav-toopen"] : mystyles["nav-toclose"]}`} 
                    id="nav-toggle" 
                    onClick={openHandler}
                >
                    {!isOpen && <i className="fas fa-bars"></i>}
                    {isOpen && <i className="far fa-window-close"></i>}
                </button>
            </div>
            <ul className={`${mystyles["nav-links"]} ${isOpen ? mystyles["show-links"] : ''}`} id="nav-links">
                {pageLinks.map(link => {
                    return (
                        <PageLink key={link.id} info={link} name="nav-link" closeHandler={closeHandler} />
                    );
                })}
            </ul>
            <ul className={mystyles["nav-icons"]}>
                {socialLinks.map(link => {
                    return (
                        <SocialLink key={link.id} info={link} name="nav-icon" />
                    );
                })}
            </ul>
            </div>
        </nav>
    );
};

export default NavBar;