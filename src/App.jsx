import React, {Fragment} from "react";

import NavBar from './components/UI/NavBar';
import Hero from "./components/Hero";
import About from "./components/About";
import OurOffer from './components/OurOffer';
import Tours from "./components/Tours";
import Footer from './components/UI/Footer';

const App = () => {
  return (
    <Fragment>
        <NavBar />
        <Hero />
        <About />
        <OurOffer />
        <Tours />
        <Footer />
    </Fragment>);
}

export default App;
