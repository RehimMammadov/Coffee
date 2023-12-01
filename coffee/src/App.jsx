import "./App.scss";
import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Reservation from "./pages/Reservation";
import Shop from "./pages/Shop";
import "./App.scss";
import Menu from "./pages/Menu";
import Basket from "./pages/BasketPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/basket" element={<Basket />} />
      </Route>
    </Routes>
  );
};

export default App;
