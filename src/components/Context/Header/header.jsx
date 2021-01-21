import React from "react";
import "./styles.scss";

const Header = ({ month }) => (
  <div>
    <h1>Birth Month Meaning</h1>

    <hr className="hrStyle" />

    <h2>{month}</h2>
  </div>
);

export default Header;
