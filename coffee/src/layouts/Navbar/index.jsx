import React from "react";
import "./index.scss";
import "../../App.scss"
import Logo from "/public/img/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-inner">
        <div className="navtexts">
          <ul>
            <li>
              <div className="circle"></div>
              <NavLink className={'navlink'} to={"/"}>HOME</NavLink>
            </li>
            <li>
              <div className="circle"></div>
              <NavLink className={'navlink'} to={"/about"}>ABOUT</NavLink>
            </li>
            <li>
              <div className="circle"></div>
              <NavLink className={'navlink'} to={"/menu"}>MENU</NavLink>
            </li>
            <li>
              <div className="circle"></div>
              <NavLink className={'navlink'} to={"/reservation"}>RESERVATION</NavLink>
            </li>
          </ul>
        </div>
        <div className="logo">
          <img to={"/"} src={Logo} alt="" />
        </div>
        <div className="nav-texts">
          <ul>
            <li className="sublink">
              <div className="circle"></div>
              <NavLink  className={'navlink'} to={"/shop"}>SHOP</NavLink>
              <div className="submenu">
                <ul className="sub-texts">
                  <li>SHOP</li>
                  <li>SHOP DETAILS</li>
                  <li>SHOP CART</li>
                  <li>SHOP CHECKOUT</li>
                </ul>
              </div>
            </li>
            <li className="sublink">
              <div className="circle"></div>
              <NavLink className={'navlink'} to={"/contact"}>CONTACT</NavLink>
            </li>
          </ul>
        </div>
        <div className="buttons">
          <i class="fa-solid fa-magnifying-glass"></i>
          <i class="fa-regular fa-sun"></i>
          <i class="fa-solid fa-basket-shopping"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
