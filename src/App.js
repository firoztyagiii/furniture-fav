import React, { Fragment } from "react";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Experience from "./components/Experience/Experience";
import Service from "./components/Service/Service";
import Footer from "./components/Footer/Footer";
import ChooseUs from "./components/ChooseUs/ChooseUs";
import Gallery from "./components/Gallery/Gallery";

const App = () => {
  return (
    <Fragment>
      <Header></Header>
      <Hero></Hero>
      <Experience></Experience>
      <Service></Service>
      <Gallery></Gallery>
      <ChooseUs></ChooseUs>
      <Footer></Footer>
    </Fragment>
  );
};

export default App;
