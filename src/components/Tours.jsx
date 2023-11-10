import React, { useState } from "react";

import mystyles from './Tours.module.css';
import { tours } from "../data";
import { categories } from "../data";
import Title from "./helpers/Title";
import Tour from "./helpers/Tour";
import Button from "./helpers/Button";

const Tours = () => {
    const [categorieId, setCategorieId] = useState('explore');

    const categorieChanger = (categ) => {
        setCategorieId(categ);
    };

    const filteredTours = tours.filter(item => item.categorie === categorieId);

    return (
        <section className="section" id="tours">
            <Title part1='featured' part2='tours' />
            <div className={mystyles["btn-holder"]}>
                {categories.map(item => {
                    return (
                        <Button 
                            key={item.categorie}
                            categorie={item.categorie} 
                            title={item.title}
                            categorieChanger={categorieChanger}
                            activeClass={item.categorie === categorieId ? 'active' : undefined}
                        />
                    );
                })}
            </div>
            <div className={`section-center ${mystyles["featured-center"]}`}> 
                {filteredTours.map((item) => {
                    return <Tour key={item.id} info={item} />
                })}
            </div>
        </section>
    );
}

export default Tours;