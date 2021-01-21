import React from "react";
import Header from "../Context/Header/header";
import Meaning from "../Context/Meaning/meaning";
import "./styles.scss";

const MainContent = ({ month, meaning, clickMonth }) => (
  <div className="mainContent">
    <Header month={month} />
    <Meaning meaning={meaning} clickMonth={clickMonth} />
  </div>
);

export default MainContent;
