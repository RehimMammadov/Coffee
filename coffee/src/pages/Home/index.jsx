import React from 'react'
import "./index.scss"
import Best from '../../components/Best'
import Story from '../../components/Story'
import Popular from '../../components/Popular'
import CoffeeMachine from '../../components/CoffeeMachine'

const Home = () => {
  return (
    <>
    <Best/>
    <Story/>
    <Popular/>
    <CoffeeMachine/>
    </>
  )
}

export default Home