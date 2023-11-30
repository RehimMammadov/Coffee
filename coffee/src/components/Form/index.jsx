import React from 'react'
import "./index.scss"

const Form = () => {
  return (
    <div className='form-main-container'>
        <form action="">
            <div className='name-input'>
                <input type="text" placeholder='Your name :' />
                <input type="text" placeholder='Your Email :' />
            </div>
            <input className='subject' type="text" placeholder='Enter your Subject' />
            <textarea name='message' placeholder='Your Message'></textarea>
            <div>
              <button>SEND MESSAGE</button>
            </div>   
        </form>
    </div>
  )
}

export default Form