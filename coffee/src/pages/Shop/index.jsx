import React from 'react'
import "./index.scss"
import useFetchData from '../../hooks/UseFetchData'
import ProductCard from '../../components/ProductCard';
import Product from '../../components/Product';

const Shop = () => {

  return (
    <div className='max-w-[90%] mx-auto'>
      <div className='contact-main'>
            <h2>CAFENA PRODUCT</h2>
            <div className='home-slash-page'>
              <h6>HOME/</h6>
              <span>PRODUCT</span>
            </div>
      </div>
      <Product />
    </div>
  )
}

export default Shop