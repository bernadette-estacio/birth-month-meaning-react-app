import React from "react";
import "./styles.scss";

const Meaning = ({ clickMonth, meaning }) => (
  <div className={clickMonth ? "visible" : "invisible"}>{meaning}</div>
);

export default Meaning;
