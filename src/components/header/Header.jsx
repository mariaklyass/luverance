import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../logo/Logo";
import { MENU } from "../../utils/constants";

const Header = () => {
  // experiment
  // const hero = document.querySelector(".hero-concert-content");
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
    // hero.style.backdropFilter = "none";
  };
  const handleLinkClick = () => {
    setMenuOpen(false);
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
              !link.startsWith("#") && isActive ? "active" : ""
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
        ☰
      </div>
    </header>
  );
};

export default Header;
