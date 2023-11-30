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
      </div>
      <ReservationForm />
    </div>
  )
}

export default Reservation