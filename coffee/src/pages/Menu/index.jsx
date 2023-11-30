import React from 'react'
import "./index.scss"
import useFetchData from '../../hooks/UseFetchData'

const Menu = () => {
  const {data} = useFetchData("menu");
  return (
    <div>
      <div className='contact-main'>
            <h2>CAFENA MENU</h2>
            <div className='home-slash-page'>
              <h6>HOME/</h6>
              <span>MENU</span>
            </div>
        </div>
        <div className="head-texts">
        <span>MENU</span>
        <h2>CAFENA POPULAR MENU</h2>
      </div>
      <div className='menu-category-container'>
        <div className='menu-category'>
          <div className='menu-btns'>
            <button id='all'>ALL</button>
            <button>HOT COFFEE</button>
            <button>COLD COFFEE</button>
            <button>HOT DRINKS</button>
            <button>COLD DRINKS</button>
          </div>
        </div>
      </div>
      <div className="wrapper">
        {data.map((item) => (
          <div className="popularCard">
            <div className="bg-animation"></div>
            <img src={item.img} alt="" />
            <div className="details">
              <h3>{item.name}
                <div className="name-line"></div>
              </h3>
              <p>${item.price}.00</p>
            </div>
          </div>

        ))}
      </div>
    </div>
  )
}

export default Menu