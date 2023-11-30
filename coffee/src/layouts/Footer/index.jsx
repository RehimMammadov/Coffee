import React from 'react'
import "./index.scss"

const Footer = () => {
  return (
    <footer>
      <div className="footerbox">
        <div className='top'>
          <div className='top-part'>
            <div className='directions'>
              <ul>
                <li><i className="fa-solid fa-mobile-screen"></i>
                  <p>PHONE :<a href="">+88019 339 702 520</a></p></li>
                <li><i class="fa-solid fa-location-dot"></i>
                  <p>ADDRESS : <a href="">30 North West New</a></p></li>
              </ul>
            </div>

            <div className='input-subscribe'>
              <input type="text" placeholder='Enter your email' />
              <div className="email-sub">
              <a href="">Subscribe</a>
              <i class="fa-solid fa-paper-plane"></i>
              </div>
              
            </div>

            <div className='top-button'>
              <span><a href="">GO TO TOP</a></span>
            </div>
          </div>
          
          <div className='bottom-part'>
            <div className='info'>
              <img src="https://xpressrow.com/html/cafena/cafena/assets/images/logo/logo.png" alt="cofee-logo" />
              <p>
                Donec et nibh maximus, congue est eu, mattis nunc. Praesent ut quam quis quam venenatis fringilla. Morbi vestibulum</p>
            </div>

            <div className='social-media'>
              <div className='twitter'><i class="fa-brands fa-twitter"></i></div>
              <div className='facebook'><i class="fa-brands fa-square-facebook"></i></div>
              <div className='youtube'> <i class="fa-brands fa-youtube"></i></div>
              <div className='google'><i class="fa-brands fa-google-plus-g"></i></div>
              <div className='instagram'><i class="fa-brands fa-instagram"></i></div>
            </div>
          </div>
        </div>

        <div className='bottom'>
          <div className='links'></div>
          <button className='button-to-top'></button>
        </div>
      </div>
    </footer>
  )
}

export default Footer