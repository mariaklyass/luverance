import React from "react";
import logo from "../../../public/images/logo.svg";
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
