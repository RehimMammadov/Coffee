import React from 'react';
import Product from '../../components/Product';
import Sort from '../../components/Sort';
import Filter from '../../components/Filter';

const Shop = () => {

  return (
    <div>
      <div className='contact-main'>
            <h2>CAFENA PRODUCT</h2>
            <div className='home-slash-page'>
              <h6>HOME/</h6>
              <span>PRODUCT</span>
            </div>
      </div>
      <div style={{maxWidth: "83%", margin: "0 auto"}}>
          <Sort />
        <div style={{width: "100%", display: "flex", justifyContent: "space-between"}}>
          <Product />
          <Filter />
        </div>
      </div>
    </div>
  )
}

export default Shop