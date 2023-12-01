import React from "react";
import "./index.scss";

const Basket = () => {
  return (
    <section id="basket">
      <div className="basket-inner">
        <h1>Shop Basket</h1>
        <div className="basketHeadTexts">
          <p>Product</p>
          <p>Category</p>
          <p>
            Price & <span>Discount Price</span>
          </p>
          <p>Product Quantity</p>
          <p>Total Price</p>
        </div>
        <div className="basketWrapper">
          <div className="basketCard">
            <div className="basketImg">
              <img
                src="https://xpressrow.com/html/cafena/cafena/assets/images/products/shop/s-p-2.png"
                alt=""
              />
            </div>
            <div className="basketCardTexts">
              <p className="name">VICARAGUA COFFEE BEANS</p>
              <p className="category">ROSTED COFFEE</p>
              <div className="productDetail">
                <p>345</p> <span> $325.00</span>
              </div>
              <div className="quantity">
                <p className="countModify">+</p>
                <p>1</p>
                <p className="countModify">-</p>
              </div>
              <p className="total">$325.00</p>
              <i className=" fa-solid fa-trash-can"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Basket;
