import React from 'react'
import "./index.scss"

const Search = () => {
  return (
    <div className='search-product'>
      <h2>SEARCH HERE</h2>
      <div className='search-svg'>
        <input type="text" placeholder='Search Product' />
        <i class="fa-solid fa-magnifying-glass" style={{color: "#949494"}}></i>
      </div>
    </div>
  )
}

export default Search