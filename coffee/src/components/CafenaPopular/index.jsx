import React from "react";
import { useNavigate } from "react-router-dom";
import useFetchData from "../../hooks/UseFetchData";
import "./index.scss";

const CafenaPopular = () => {
  const { data, isLoading, error } = useFetchData("products");
  const navigate = useNavigate();
  return (
    <section id="popularPoduct">
      <div className="container">
        <span className="headtext">POPULAR PRODUCT</span>
        <div className="textAndButton">
          <h2>CAFENA POPULAR PRODUCT</h2>
          <button onClick={() => navigate("/shop")}>VIEW ALL PRODUCT</button>
        </div>
        <div className="wrapper">
          {isLoading ? (
            <h1>Loading...</h1>
          ) : (
            data
              .filter((x) => x.status === "popular")
              .map((x) => {
                return (
                  <div className="popularCard">
                    <div className="bg"></div>
                    <div className="links">
                        <i className="fa-solid fa-basket-shopping"></i>
                        <i className="fa-regular fa-eye"></i>
                        <i className="fa-regular fa-heart"></i>
                    </div>
                    <div className="popularImage">
                      <img
                        src={x.img}
                        alt=""
                      />
                    </div>
                    <div className="texts">
                      <p>
                        COFFEE
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                      </p>
                      <h3>{x.name}</h3>
                      <p>
                        PRICE - ${x.discountPrice} <span>${x.price}</span>
                      </p>
                    </div>
                  </div>
                );
              })
          )}
        </div>
      </div>
    </section>
  );
};

export default CafenaPopular;
