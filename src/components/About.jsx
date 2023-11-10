import React from "react";

import mystyles from './About.module.css';
import aboutImg from '../images/about.jpg';

import Title from "./helpers/Title";

const About = () => {
    return (
        <section className="section" id="about">
            <Title part1="about" part2="niš"/>
            <div className={`section-center ${mystyles['about-center']}`}>
                <div className={mystyles['about-img']}>
                    <img
                        src={aboutImg}
                        className={mystyles['about-photo']}
                        alt="The monument to the liberators of Nis at King Milan square"
                    />
                </div>
                <article className={mystyles['about-info']}>
                    <h3>explore our city</h3>
                    <p>
                        Discover Niš, a city steeped in history, brimming with vibrant culture, and embracing the spirit of warm hospitality. Our website is your gateway to exploring the rich tapestry of experiences that Niš has to offer. Whether you're a curious traveler or a seasoned adventurer, Niš has something special for you.
                    </p>
                    <p>
                        Our mission is to be your ultimate place for everything our city can offer. We're here to help and guide you through the city's hidden gems and iconic landmarks. We believe in promoting the beauty, history, and unique character of Niš to the world, ensuring that your visit will be nothing short of extraordinary.
                    </p>
                    <a href="https://en.wikipedia.org/wiki/Niš" target="_blank" className="btn">explore more</a>
                </article>
            </div>
        </section>
    );
}

export default About;