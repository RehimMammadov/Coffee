import React from 'react'
import "./index.scss"

const Category = () => {
  return (
    <div className='search-product'>
      <h2>SEARCH HERE</h2>
      <div className='search-svg'>
        <button>Hot Coffees <span>04</span></button>
      </div>
      <div className='search-svg'>
        <button>Cold Coffees <span>06</span></button>
      </div>
      <div className='search-svg'>
        <button>Hot Drinks <span>08</span></button>
      </div>
      <div className='search-svg'>
        <button>Cold Drinks <span>10</span></button>
      </div>
    </div>
  )
}

export default Category