import React from 'react'
import "./index.scss"

const Popular = () => {
  const products = [
    {
      name: 'AMERICANO ROSTED GRED',
      img: 'https://xpressrow.com/html/cafena/cafena/assets/images/menu/menu-2-1.png',
      price: 15
    },
    {
      name: 'VIRGIN COFFEE GRED',
      img: 'https://xpressrow.com/html/cafena/cafena/assets/images/menu/menu-2-2.png',
      price: 42
    },
    {
      name: 'CAFE AU LAIT GRED',
      img: 'https://xpressrow.com/html/cafena/cafena/assets/images/menu/menu-2-3.png',
      price: 25
    },
    {
      name: 'JAPANESE COFFEE GRED',
      img: 'https://xpressrow.com/html/cafena/cafena/assets/images/menu/menu-2-4.png',
      price: 32
    },
    {
      name: 'JAPANESE COFFEE GRED',
      img: 'https://xpressrow.com/html/cafena/cafena/assets/images/menu/menu-2-5.png',
      price: 62
    },
    {
      name: 'ESPRESSO RISTERETTO ',
      img: 'https://xpressrow.com/html/cafena/cafena/assets/images/menu/menu-2-6.png',
      price: 25
    },
  ]
  return (
    <section id='popularMenu'>
      <div className="head-texts">
        <span>MENU</span>
        <h2>CAFENA POPULAR MENU</h2>
      </div>
      <div className="wrapper">
        {products.map((x) => (
          <div className="popularCard">
            <div className="bg-animation"></div>
            <img src={x.img} alt="" />
            <div className="details">
              <h3>{x.name}
                <div className="name-line"></div>
              </h3>
              <p>${x.price}</p>
            </div>
          </div>

        ))}
      </div>


    </section>
  )
}

export default Popular