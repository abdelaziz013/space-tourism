import React from "react";
import logo from "../assets/shared/logo.svg";
import menu from "../assets/shared/icon-hamburger.svg";
import close from "../assets/shared/icon-close.svg";
import { useUI } from "./UIManager";

const Navbar = () => {
  const {toggleSidebar,isSidebarOpen}=useUI()
  return (
    <header className="header">
      {/* logo */}
      <div className="header__logo">
        <img src={logo} alt="logo" />
      </div>
      {/* menu btn */}
      <div className="header__menu" onClick={toggleSidebar}>
        <img src={menu} alt="menu-btn" />
      </div>
      {/* nav */}
      <nav className={`header__nav ${isSidebarOpen&&'show'}`}>
        {/* side bar close btn */}
        <div className="header__nav__close-btn" onClick={toggleSidebar}>
          <img src={close} alt="close-btn" />
        </div>
        <ul>
          <li className="header__nav__list-item"><span>00</span>home</li>
          <li className="header__nav__list-item"><span>01</span>destination</li>
          <li className="header__nav__list-item"><span>02</span>crew</li>
          <li className="header__nav__list-item"><span>03</span>technology</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
