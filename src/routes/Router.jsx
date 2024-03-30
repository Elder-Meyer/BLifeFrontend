import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppNavBar from '../components/layout/Navbar/AppNavBar'
import { routeo } from './router.elements'

export const Router = () => {
  return (
    <BrowserRouter>
      <AppNavBar/>
      <Routes>
        {
          routeo && routeo.map((route, index)=>{
            return(
              <Route key={index} path={route.path} element={route.element} />
            )
          })
        }
      </Routes>
    </BrowserRouter>
  )
}