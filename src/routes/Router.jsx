import React from 'react'
import { Home } from '../views/Home'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import AppNavBar from '../components/layout/Navbar/AppNavBar'

export const Router = () => {
  return (
    <BrowserRouter>
      <AppNavBar/>
      <Routes>
        <Route path="/" element={<Navigate to={"/inicio"}/>} />
        <Route path="/inicio" element={<Home/>} />
        <Route path="/Productos" element={"sección de productos"} />
        <Route path="/Promociones" element={"sección de promociones"} />
        <Route path="/Nosotros" element={"sección sobre nosotros"} />
        <Route path="*" element={"nothing"} />
      </Routes>
    </BrowserRouter>
  )
}