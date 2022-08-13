import React from 'react'
import Home from './pages/Home';
import Booking from './pages/Booking';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Form from './pages/Form';
import About from './pages/About';

const App = () => {
  return (
   

<BrowserRouter>

<Routes>
  
  {/*  Home page*/}
  <Route path="/" element={<Home/>} />
  {/*  booking  page*/}
  <Route path="/booking" element={<Booking/>} />
  <Route path="/form" element={<Form/>} />
  <Route path="/about" element={<About/>} />
 
 
</Routes> 
</BrowserRouter>

  )
}

export default App