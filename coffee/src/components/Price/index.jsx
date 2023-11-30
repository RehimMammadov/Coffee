import React, { useState } from 'react';
import "./index.scss"

const Price = () => {
  const [sliderValue, setSliderValue] = useState(10000);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  return (
    <div className='search-product'>
      <h2>SEARCH HERE</h2>
      <div className="slidecontainer">
        <input style={{background: "#c7a17a"}} type="range" min="0" max="10000" value={sliderValue} className="slider" id="myRange" onChange={handleSliderChange} />
        <div className='price'>
          <p>$0 - ${sliderValue}</p>
          <button>FILTER</button>
        </div>
    </div>
    </div>
    
  );
};

export default Price;
