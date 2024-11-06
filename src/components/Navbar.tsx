import React from "react";
import logo from "../assets/shared/logo.svg";
import menu from "../assets/shared/icon-hamburger.svg";
import close from "../assets/shared/icon-close.svg";
import { useUI } from "./UIManager";
import { NavLink } from "react-router-dom";
import { NavData } from "../data"
const Navbar = () => {
  const { toggleSidebar, isSidebarOpen } = useUI()
  return (
    <header className="header">
      {/* logo */}
      <div className="header__logo">
        <div>
          <img src={logo} alt="logo" />
        </div>
      </div>
      {/* menu btn */}
      <div className="header__menu" onClick={toggleSidebar}>
        <img src={menu} alt="menu-btn" />
      </div>
      {/* nav */}
      <nav className={`header__nav ${isSidebarOpen && 'show'}`}>
        {/* side bar close btn */}
        <div className="header__nav__close-btn" onClick={toggleSidebar}>
          <img src={close} alt="close-btn" />
        </div>
        <ul>
          {NavData.map((e, i) =>
            <li key={i}>
              <NavLink
                to={e.to}
                
                className={({ isActive }) => "header__nav__list--item header__nav__list--item-navLink" + (isActive ? " header__nav__list--item-active" : "")}
              >
                <span>0{i}</span>
                {e.pathName}
              </NavLink>
            </li>
          )}



        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
