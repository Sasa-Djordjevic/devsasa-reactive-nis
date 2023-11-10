import React from "react";

import mystyles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={mystyles.hero} id="home">
          <div className={mystyles["hero-banner"]}>
            <h1>Welcome to Niš</h1>
            <p>Where History and Hospitality Unite</p>
            <a href="#tours" className={mystyles["hero-btn"]}>explore tours</a>
          </div>
        </section>
    );
}

export default Hero;