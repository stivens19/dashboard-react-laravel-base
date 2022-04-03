import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Curso from '../containers/Cursos/Curso'
import Home from '../containers/Home'

const DashboardRoutes = () => {
  return (
    <Routes>
        <Route index element={<Home />} />
        <Route path="/cursos" element={<Curso />} />
    </Routes>
  )
}

export default DashboardRoutes