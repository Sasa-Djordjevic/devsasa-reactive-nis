import React, {Fragment} from "react";

import mystyles from './OurOffer.module.css';
import { ouroffer } from "../data";
import Title from "./helpers/Title";
import Offer from "./helpers/Offer";

const OurOffer = () => {
    return (
        <Fragment>
            <section className={`section ${mystyles['section-offer']}`} id="offer">
                <div className={mystyles.ouroffer}>
                    <Title part1='our' part2='offer' />
                    <div className={`section-center ${mystyles['ouroffer-center']}`}>
                        {ouroffer.map((item) => {
                            return <Offer key={item.id} icon={item.icon} title={item.title} text={item.text} />
                        })}
                    </div>
                </div>
                <div className={`section-center ${mystyles['text-center']}`}>
                    <div className={mystyles['text-info']}>
                        <h3>Why Niš?</h3>
                    </div>
                    <div className={mystyles['text-info']}></div>
                </div>
                <div className={`section-center ${mystyles['text-center']}`}>
                    <div className={mystyles['text-info']}>
                        <p>Niš is a city that offers something for everyone. History enthusiasts can explore ancient ruins and museums, while foodies can indulge in culinary delights. Nature lovers can venture into the surrounding countryside, and culture seekers can immerse themselves in the vibrant arts scene. No matter your interests, Niš will leave you with unforgettable memories. Thank you for visiting our website and considering Niš as your next travel destination. </p>
                    </div>
                    <div className={mystyles['text-info']}>
                        <p>We invite you to embark on an exciting journey with us, uncovering the hidden treasures of this charming city and experiencing the warmth and hospitality of its people. Explore Niš, discover its stories, and create memories that will last a lifetime. We're here to guide you every step of the way, ensuring your visit to Niš is truly exceptional. Come and explore Niš – where history and hospitality unite.</p>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}

export default OurOffer;