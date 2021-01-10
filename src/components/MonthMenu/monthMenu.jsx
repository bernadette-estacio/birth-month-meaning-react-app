import React from 'react';
import "./styles.css";

const MonthMenu = ({ monthsList, showMeaning }) => {
  return (
    <div className="sidenav">
      <p>Select Your Birth Month:</p>
      <ul>
        {monthsList.map(month => (
          <li key={month} id={month} onClick={showMeaning}>
            {month}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MonthMenu;
