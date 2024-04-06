import React from "react";
import logo from "/src/assets/icons/logo.svg";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">
        <img src={logo} alt="luverance" />
      </Link>
    </div>
  );
};

export default Logo;
