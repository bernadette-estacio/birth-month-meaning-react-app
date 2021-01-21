import React, { useEffect } from "react";
import monthsList from "../../../monthsList";
import { getMonths } from "../../../monthsMeaning";
import "./styles.scss";

const MonthMenu = ({ month, setMonth, setMeaning, setClickMonth }) => {
  const monthDB = getMonths();

  const clickHandle = (e) => {
    setMonth(e.currentTarget.id);
    setClickMonth(false);
  };

  useEffect(() => {
    if (month) {
      const meaning = monthDB[monthsList.indexOf(month)][month];
      const showMeaning = setTimeout(() => {
        setMeaning(meaning.map((sentence, i) => <p key={i}>{sentence}</p>));
        setClickMonth(true);
      }, 350);
      return () => {
        clearTimeout(showMeaning);
      };
    }
  }, [month]);

  return (
    <div className="sidenav">
      <p>Select Your Birth Month:</p>
      <ul>
        {monthsList.map((month) => (
          <li key={month} id={month} onClick={clickHandle}>
            {month}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MonthMenu;
