import React from "react";
import Best from "../../components/Best";
import CafenaPopular from "../../components/CafenaPopular";
import CoffeeMachine from "../../components/CoffeeMachine";
import Map from "../../components/Map";
import News from "../../components/News";
import Popular from "../../components/Popular";
import Slider from "../../components/Slider";
import Story from "../../components/Story";
import Header from "../../layouts/Header";
import "./index.scss";

const Home = () => {
  return (
    <>
      <Header />
      <Best />
      <Story />
      <Popular />
      <CoffeeMachine />
      <CafenaPopular />
      <Slider />
      <Map />
      <News />
    </>
  );
};

export default Home;
