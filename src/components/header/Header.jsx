import React from "react";
import img from "../img/breaking-logo.png";

function Header() {
  return (
    <div className="header">
      <img src={img} alt="Breaking-Bad" />
    </div>
  );
}

export default Header;
