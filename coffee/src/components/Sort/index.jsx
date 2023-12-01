import React from 'react'
import "./index.scss"
import useFetchData from '../../hooks/UseFetchData'
import Grid from "../../../public/svg/apps-grid-icon (1).svg"

const Sort = () => {
  const {data} = useFetchData("products");
  return (
    <div className='sort-main'>
        <span>Showing 1--{data.length} of {data.length} results</span>
        <div style={{display: "flex", gap: "20px", alignItems: "center"}}>
          <div style={{display: "flex", gap: "10px", alignItems: "center"}}>
            <img style={{width: "13px", height: "13px"}} src={Grid} alt="" />
            <i style={{cursor: "pointer", width: "15px", height: "15px"}} className="fas fa-list-ul"></i>
          </div>
          <select style={{border: "none", fontSize: "16px", cursor: "pointer"}}>
            <option value="Low">Sort from Low to High Price</option>
            <option value="High">Sort from High to low Price</option>
            <option value="Popular">Sort By Population</option>
          </select>
        </div>
    </div>
  )
}

export default Sort