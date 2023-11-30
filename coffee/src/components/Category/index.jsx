import React from 'react'
import "./index.scss"

const Category = () => {
  return (
    <div className='search-product'>
      <h2>SEARCH HERE</h2>
      <div className='search-svg'>
        <button>CREUSET COCOTTE <span>04</span></button>
      </div>
      <div className='search-svg'>
        <button>ROSTED COFFEE <span>06</span></button>
      </div>
      <div className='search-svg'>
        <button>CAPPUCINO <span>08</span></button>
      </div>
    </div>
  )
}

export default Category