import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Reservation from './pages/Reservation'
import Shop from './pages/Shop'
import Menu from './pages/Menu/index';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/reservation' element={<Reservation />} />
        <Route path='/shop' element={<Shop />} />
      </Route>
    </Routes>
  )
}

export default App