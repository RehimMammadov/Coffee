import React from 'react'
import "./index.scss"

const ProductCard = ({product}) => {
  return (
    <div className='product-card-main'>
        <div className='like-basket'>
            <div style={{width: "55px", height: "25px", border: "1px solid gray", borderRadius: "6px", cursor: "pointer"}}>
                <i class="fa-regular fa-heart" style={{color: "#000", fontSize: "12px"}}></i>
            </div>
            <div style={{width: "55px", height: "25px", border: "1px solid gray", borderRadius: "6px", cursor: "pointer"}}>
                <i class="fa-solid fa-basket-shopping" style={{color: "#000", fontSize: "12px"}}></i>
            </div>
            <div style={{width: "55px", height: "25px", border: "1px solid gray", borderRadius: "6px", cursor: "pointer"}}>
              <i class="fa-regular fa-eye" style={{color: "#000", fontSize: "12px"}}></i>
            </div>
        </div>
        <img style={{height: "135px", width: "auto", margin: "0px, auto"}} src={product.img} alt="" />
        <p>{product.category}</p>
        <h4>{product.name}</h4>
        <h5>PRICE - <span className='discount'>${product.discountPrice} / </span> <span className='price'>${product.price}</span></h5>
    </div>
  )
}

export default ProductCard