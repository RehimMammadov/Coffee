import React, { useState } from 'react';
import "./index.scss";
import axios from 'axios';
import useFetchData from '../../hooks/UseFetchData';

const Form = () => {
  const { data } = useFetchData("contact");
  const [contactFormData, setContactFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setContactFormData({ ...contactFormData, [e.target.id]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3000/contact", contactFormData);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='form-main-container'>
        <form onSubmit={handleSubmit}>
        <div className='name-input'>
          <input
            id="name"
            value={contactFormData.name}
            type="text"
            placeholder='Your name :'
            onChange={handleChange}
          />
          <input
            id="email"
            value={contactFormData.email}
            type="text"
            placeholder='Your Email :'
            onChange={handleChange}
          />
        </div>
        <input
          id="subject"
          value={contactFormData.subject}
          className='subject'
          type="text"
          placeholder='Enter your Subject'
          onChange={handleChange}
        />
        <textarea
          id="message"
          value={contactFormData.message}
          name='message'
          placeholder='Your Message'
          onChange={handleChange}
        />
        <div>
          <button type='submit'>SEND MESSAGE</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
