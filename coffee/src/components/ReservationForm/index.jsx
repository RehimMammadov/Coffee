import React from 'react'
import "./index.scss"

const ReservationForm = () => {
  return (
    <div className='form-main-container'>
        <form action="">
          <h1 style={{textAlign: "center"}}>RESERVATION FORM</h1>
            <div className='name-input'>
                <input type="text" placeholder='Enter your name' />
                <input type="text" placeholder='Enter your number' />
            </div>
            <div className='name-input'>
                <input type="text" placeholder='Seates* ' />
                <input type="date" placeholder='dd/mm/yyyy' />
            </div>
            <div className='name-input'>
                <input type="text" placeholder='Time ' />
                <input type="text" placeholder='Enter your email' />
            </div>
            <button>SUBMIT YOUR REQUEST</button>
        </form>
    </div>
  )
}

export default ReservationForm