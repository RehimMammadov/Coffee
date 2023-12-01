import React from 'react'
import "./index.scss"
import ProductCard from '../ProductCard'
import useFetchData from '../../hooks/UseFetchData';

const Product = () => {
  const { data, isLoading, error } = useFetchData("products");
  console.log(data);
  return (
    <div className='products-main-container'>
        {
          data && data.map((product) => {
            return (
              <ProductCard key={product.id} product={product} />
            )
          })
        }
    </div>
  )
}

export default Product