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
    setFavs([...favs, { ...item }]);
  }

  function addBasket(item) {
    const find = basketArr.find((x) => x.id === item.id);
    if (find) {
      find.count++;
      find.total = find.discountPrice * find.count;
      setBasketArr([...basketArr]);

      Swal.fire({
        title: "Already In Cart!!!",
        icon: "error",
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
    <div style={{height: "370px"}} className="popularCard">
        <div className="bg"></div>
        <div className="links">
            <i onClick={()=>addBasket(product)} className="fa-solid fa-basket-shopping"></i>
            <i className="fa-regular fa-eye"></i>
            <i onClick={()=>addWishlist(product)} className="fa-regular fa-heart"></i>
        </div>
        <div className="popularImage">
          <img src={product.img} alt="" />
        </div>
        <div className="texts">
            <h2>{product.category}</h2>
            <h3>{product.name}</h3>
            <p>PRICE - ${product.discountPrice} <span>${product.price}</span></p>
        </div>
    </div>
  );
};

export default ProductCard;
