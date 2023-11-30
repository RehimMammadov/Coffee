import React from 'react';
import Product from '../../components/Product';
import "./index.scss";

const Shop = () => {

  return (
    <div className='max-w-[90%]'>
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