import React from 'react'
import Navbar from '../Navbar'
import { Outlet } from "react-router-dom"
import Footer from '../Footer'
import Header from '../Header'

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Header/>
      <Outlet />
      <Footer />
    </>
  )
}

export default MainLayout