import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../logo/Logo";
import { MENU } from "../../utils/constants";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  //hover
  const [hover, setHover] = useState(false);
  const handleHover = () => {
    setHover(!hover);
  };
  //
  return (
    <header id="navbar" className="header">
      <Logo />
      <nav className={`menu ${menuOpen ? "show" : ""}`}>
        {MENU.map(({ link, name }, i) => (
          <NavLink
            key={i}
            className={({ isActive }) =>
              !link.startsWith("#") && isActive
                ? "active menu-item"
                : "menu-item"
            }
            to={`/${link}`}
            delay={`${i * 0.1}s`}
            onClick={() => {
              handleLinkClick();
            }}
          >
            {name}
          </NavLink>
        ))}
      </nav>

      <div className="menu-toggle" onClick={handleMenuClick}>
        <div className="menu-toggle__content">
          {menuOpen ? (
            <img src="/images/icon-close.png" />
          ) : (
            <img src="/images/burger.jpg" alt="Burger Icon" />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
