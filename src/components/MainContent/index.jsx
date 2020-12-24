// import React, { useState, useRef, useEffect } from 'react';
import React from 'react';
import "./styles.css";

const MainContent = ({ month, meaning, clickMonthState }) => {
  const contentClass = clickMonthState.clickMonth ? "visible" : "invisible";

  return (
    <div className="mainContent">
      <h1>Birth Month Meaning</h1>
      <hr className="hrStyle" />
      <h2>{month}</h2>
      <div className={contentClass} id="content">{meaning}</div>
    </div>
  );
};

export default MainContent;