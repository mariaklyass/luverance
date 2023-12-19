import React from "react";
// import "../../../css/style.css";
import { NavLink } from "react-router-dom";
import Logo from "../logo/Logo";
import { MENU } from "../../utils/constants";

const Header = () => (
  <header id="navbar" className="header">
    <Logo />
    <nav className="menu">
      {MENU.map(({ link, name }, i) => (
        <NavLink
          className={({ isActive }) =>
            !link.startsWith("#") && isActive ? "active" : ""
          }
          to={`/${link}`}
        >
          {name}
        </NavLink>
      ))}
    </nav>
  </header>
);

export default Header;
