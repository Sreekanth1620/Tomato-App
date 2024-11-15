import React, { useState } from 'react'
import "./index.css"
import "./App.css"
import Navbar from './components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import AppDownload from './components/AppDownload/AppDownload'
import LoginPopup from './components/Login-popup/LoginPopup'

function App() {
  const [login,setLogin] = useState(false)
  return (
    <>
    {login?<LoginPopup setLogin={setLogin}/> :<></>}
    <div className='app'>
      <Navbar setLogin={setLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/placeorder' element={<PlaceOrder/>}/>
      </Routes>
      
    </div>
    <AppDownload/>
    <Footer/>
    </>
  )
}

export default App
