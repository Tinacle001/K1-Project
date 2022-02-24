import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { getToken } from './common'

const PrivateRoute = () => {
  const token = getToken()
  return token ? <Outlet /> : <Navigate to='/signin' />
}

export default PrivateRoute
