import Home from './components/Home'
import Signup from './components/Signup'
import Login from './components/Login'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

function App() {
  return (

      <BrowserRouter>
      <Routes>
     
         <Route path="/" element={<Home/>} />
         <Route path="/signup" element={<Signup/>} />
         <Route path="/login" element={<Login/>} />

      </Routes>
      <ToastContainer/>
      </BrowserRouter>
      
  )
}

export default App
