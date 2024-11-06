import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
const RootLayout = () => {
  const { pathname } = useLocation()
  return (
    <>
      <div className={`layout layout__${pathname.substring(1)?pathname.substring(1):'home'}`}>
        <Navbar />
        <Outlet />
      </div>
    </>
  )
}
export default RootLayout;