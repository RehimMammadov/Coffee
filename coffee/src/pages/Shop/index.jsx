import React from 'react'
import "./index.scss"
import useFetchData from '../../hooks/UseFetchData'
import ProductCard from '../../components/ProductCard';

const Shop = () => {
  const { data, isLoading, error } = useFetchData("products");


  return (
    <div>
      <div className='contact-main'>
            <h2>CAFENA PRODUCT</h2>
            <div className='home-slash-page'>
              <h6>HOME/</h6>
              <span>PRODUCT</span>
            </div>
        </div>
        <div className='products-main-container'>
          <div className="grid-sort-container"></div>
              {
                data && data.map((product) => {
                  return (
                    <ProductCard key={product.id} product={product} />
                  )
                })
              }
        </div>
    </div>
  )
}

export default Shop