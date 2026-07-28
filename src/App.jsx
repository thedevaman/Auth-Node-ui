import Home from './components/Home'
import Signup from './components/Signup'
import Login from './components/Login'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Profile from './components/apps/Profile'
import AuthGuard from './components/apps/AuthGuard'

function App() {
  return (

      <BrowserRouter>
      <Routes>
     
         <Route path="/" element={<Home/>} />
         <Route path="/signup" element={<Signup/>} />
         <Route path="/login" element={<Login/>} />
         <Route element={<AuthGuard/>}>
         <Route path='/app/profile' element={<Profile/>} />
         </Route>

      </Routes>
      <ToastContainer/>
      </BrowserRouter>
      
  )
}

export default App
