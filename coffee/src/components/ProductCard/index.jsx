import React, { useEffect } from "react";
import { useContext } from "react";
import { BasketContext } from "../../context/BasketContext";
import { wishlistContext } from "../../context/WishlistContext";
import Swal from "sweetalert2";
import "./index.scss";

const ProductCard = ({ product }) => {
  const { basketArr, setBasketArr } = useContext(BasketContext);
  const { favs, setFavs } = useContext(wishlistContext);

  function addWishlist(item) {
    const find = favs.find((x) => x.id === item.id);
    if (find) {
      setFavs([...favs]);

      Swal.fire({
        title: "Already In Wishlist!!!",
        icon: "error",
      });
      return;
    }
    Swal.fire({
      title: "Added To Wishlist!",
      icon: "success",
    });
    setFavs([...favs, { ...item }]);
  }

  function addBasket(item) {
    const find = basketArr.find((x) => x.id === item.id);
    if (find) {
      find.count++;
      find.total = find.discountPrice * find.count;
      setBasketArr([...basketArr]);

      Swal.fire({
        title: "Already In Cart!!! Count Increased",
        icon: "warning",
      });
      return;
    }
    Swal.fire({
      title: "Added To Cart!",
      icon: "success",
    });
    const total = item.discountPrice;
    setBasketArr([...basketArr, { ...item, count: 1, total }]);
  }

  return (
    <div className="product-card-main">
      <div className="like-basket">
        <div
          style={{
            width: "55px",
            height: "25px",
            border: "1px solid gray",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          <i
            onClick={() => addWishlist(product)}
            class="fa-regular fa-heart"
            style={{ color: "#000", fontSize: "12px" }}
          ></i>
        </div>
        <div
          style={{
            width: "55px",
            height: "25px",
            border: "1px solid gray",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          <i
            onClick={() => addBasket(product)}
            class="fa-solid fa-basket-shopping"
            style={{ color: "#000", fontSize: "12px" }}
          ></i>
        </div>
        <div
          style={{
            width: "55px",
            height: "25px",
            border: "1px solid gray",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          <i
            class="fa-regular fa-eye"
            style={{ color: "#000", fontSize: "12px" }}
          ></i>
        </div>
      </div>
      <img
        style={{ height: "135px", width: "auto", margin: "0px, auto" }}
        src={product.img}
        alt=""
      />
      <p>{product.category}</p>
      <h4>{product.name}</h4>
      <h5>
        PRICE - <span className="discount">${product.discountPrice} / </span>{" "}
        <span className="price">${product.price}</span>
      </h5>
    </div>
  );
};

export default ProductCard;
