import React from "react";
import "./index.scss";
import Best from "../../components/Best";
import Story from "../../components/Story";
import Popular from "../../components/Popular";
import CoffeeMachine from "../../components/CoffeeMachine";
import Header from "../../layouts/Header";
import CafenaPopular from "../../components/CafenaPopular";
import Slider from "../../components/Slider";
import Map from "../../components/Map";

const Home = () => {
  return (
    <main>
      <Header />
      <Best />
      <Story />
      <Popular />
      <CoffeeMachine />
      <CafenaPopular />
      <Slider />
      <Map />
    </main>
  );
};

export default Home;
