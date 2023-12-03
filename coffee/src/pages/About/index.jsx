import React from 'react'
import "./index.scss"
import BestHouse from '../../components/AboutPageBestHouse'
import BestService from '../../components/AboutPageBestService'
import HousingCity from '../../components/AboutPageHousingCity'
import Professionals from '../../components/AbooutPageProffessionals'


const About = () => {
  return (
    <section id='about'>
      <div className='about-header'>
        <div className="bg"></div>
        <div className='about-head-texts'>
          <p>ABOUT CAFENA</p>
          <h3>HOME / <span>ABOUT US</span></h3>
        </div>
        <img className='shape' src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/breadcrumb-shape-2.png" alt="" />
      </div>
      <BestHouse/>
      <BestService/>
      <HousingCity/>
      <Professionals/>
    </section>
  )
}

export default About