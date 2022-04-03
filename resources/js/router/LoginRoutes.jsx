import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../containers/Login'

export const LoginRoutes = () => {
  return (
    <Routes>
        <Route index element={<Login />} />
    </Routes>
  )
}
