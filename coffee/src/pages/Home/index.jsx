import React from "react";
import "./index.scss";
import Best from "../../components/Best";
import Story from "../../components/Story";
import Popular from "../../components/Popular";
import CoffeeMachine from "../../components/CoffeeMachine";
import Header from "../../layouts/Header";

const Home = () => {
  return (
    <>
      <Header />
      <Best />
      <Story />
      <Popular />
      <CoffeeMachine />
    </>
  );
};

export default Home;
