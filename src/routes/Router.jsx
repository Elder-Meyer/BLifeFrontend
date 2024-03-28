import React from 'react'
import { Home } from '../views/Home'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import AppNavBar from '../components/AppNavBar'

export const Router = () => {
  return (
    <BrowserRouter>
      <AppNavBar/>
      <Routes>
        <Route path="/" element={<Navigate to={"/inicio"}/>} />
        <Route path="/inicio" element={<Home/>} />
        <Route path="/Productos" element={"pro"} />
        <Route path="/Promociones" element={"prom"} />
        <Route path="/Nosotros" element={"nos"} />
        <Route path="*" element={"nothing"} />
      </Routes>
    </BrowserRouter>
  )
}