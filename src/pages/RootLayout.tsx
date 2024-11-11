import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useUI } from '../components/UIManager'
const RootLayout = () => {
  const { pathname } = useLocation()
  const { closeSideBar } = useUI()
  return (
    <>
      <div className={`layout layout__${pathname.substring(1)?pathname.substring(1):'home'}`}>
        <Navbar  />
        <div onClick={closeSideBar}>
        <Outlet/>
        </div>
      </div>
    </>
  )
}
export default RootLayout;