import React from 'react';
import "./styles.css";

const MainContent = ({ month, meaning, clickMonthState }) => {
  const clickMonth = clickMonthState.clickMonth;

  return (
    <div className="mainContent">
      <h1>Birth Month Meaning</h1>
      <hr className="hrStyle" />
      <h2>{month}</h2>
      <div className={clickMonth ? "visible" : "invisible"}>{meaning}</div>
    </div>
  );
};

export default MainContent;