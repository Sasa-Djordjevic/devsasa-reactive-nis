import React from "react";

import mystyles from './Footer.module.css';
import { pageLinks } from "../../data";
import PageLink from "../helpers/PageLink";
import { socialLinks } from "../../data";
import SocialLink from "../helpers/SocialLink";

const curentYear = new Date().getFullYear();

const Footer = () => {
    return (
        <footer className={`section ${mystyles.footer}`}>
            <ul className={mystyles["footer-links"]}>
                {pageLinks.map(link => {
                    return (
                        <PageLink key={link.id} info={link} name="footer-link" />
                    );
                })}
            </ul>
            <ul className={mystyles["footer-icons"]}>
                {socialLinks.map(link => {
                    return (
                        <SocialLink key={link.id} info={link} name="footer-icon" />
                    );
                })}
            </ul>
            <p className={mystyles.copyright}>
                copyright &copy;<span id="date">{curentYear}</span> | all rights reserved by <a href="https://devsasa.com/" target="_blanc">devsasa.com</a>
            </p>
        </footer>
    );
}

export default Footer;