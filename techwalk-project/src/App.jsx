import { useState } from 'react'
import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './components/footer/nav/navbar';
import Home from './components/footer/nav/pages/index'
import Productdetails from './components/footer/nav/pages/productdetails';

function App() {
  return(
    <>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path= "/product/:id" element={<Productdetails/>} />
    </Routes>
    
    </>
  )
}

export default App
