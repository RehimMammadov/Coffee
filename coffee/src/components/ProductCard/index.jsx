import React from 'react'
import "./index.scss"

const ProductCard = ({product}) => {
  return (
    <div className='product-card-main'>
        <div style={{width: "80px", display: "flex", gap: "10px", margin: "15px auto 15px auto" }}>
            <div style={{width: "35px", height: "35px", border: "1px solid gray", borderRadius: "6px", cursor: "pointer"}}>
                <i class="fa-regular fa-heart" style={{color: "#000", fontSize: "20px", paddingTop: "5px"}}></i>
            </div>
            <div style={{width: "35px", height: "35px", border: "1px solid gray", borderRadius: "6px", cursor: "pointer"}}>
                <i class="fa-solid fa-basket-shopping" style={{color: "#000", fontSize: "20px", paddingTop: "5px"}}></i>
            </div>
        </div>
        <img src={product.img} alt="" />
        <p>{product.category}</p>
        <h4>{product.name}</h4>
        <h5>PRICE - <span>${product.discountPrice} / </span> <span>{product.price}</span></h5>
    </div>
    
  )
}

export default ProductCard