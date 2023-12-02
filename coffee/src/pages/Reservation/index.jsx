import React from 'react'
import "./index.scss"
import ReservationForm from '../../components/ReservationForm'

const Reservation = () => {
  return (
    <div>
      <div className='contact-main'>
        <h2>RESERVATION</h2>
        <div className='home-slash-page'>
          <h6>HOME/</h6>
          <span>MENU</span>
        </div>
        <img className='shape' src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/breadcrumb-shape-2.png" alt="" />

      </div>
      <ReservationForm />
    </div>
  )
}

export default Reservation