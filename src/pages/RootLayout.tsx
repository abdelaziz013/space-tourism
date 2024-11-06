import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'

const RootLayout = () => {

  const {pathname}=useLocation()
  // const backgroundClass=pathname.substring(1)?pathname.substring(1):'home'
  const [bgClass,setBgClass]=React.useState('home')
React.useEffect(()=>{
  const path=pathname.substring(1)
setBgClass(()=>path?path:'home')

},[pathname])



  return (
    <>
    <div className={`layout layout__${bgClass}`}>
    <Navbar />
    <Outlet/>
    </div>

    </>

  )
}

export default RootLayout;