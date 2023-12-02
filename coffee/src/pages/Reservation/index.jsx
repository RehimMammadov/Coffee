import React from 'react'
import "./index.scss"
import ReservationForm from '../../components/ReservationForm'
import useFetchData from '../../hooks/UseFetchData'
import Loading from '../isLoading'

const Reservation = () => {
  const { data, isLoading, error } = useFetchData("reservation")
  return (
    <>
      {
        isLoading ? (
          <Loading />
        ) : error ? (
          <p>error</p>
        ) : (
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
    </>
  )
}

export default Reservation