import React, { useState } from 'react';
import { getMonths } from "./monthsMeaning";
import MonthMenu from "./components/MonthMenu/monthMenu";
import MainContent from "./components/MainContent/mainContent";
import monthsList from "./monthsList";

const App = () => {
  const [monthDB, setMonthDB] = useState(getMonths());

  const [month, setMonth] = useState(null);

  const [meaning, setMeaning] = useState(null);

  const [clickMonthState, setClickMonthState] = useState({
    clickMonth: false
  });

  const showMeaning = e => {
    setClickMonthState({ clickMonth: false })
    let clickedMonth = e.currentTarget.id;
    const index = monthsList.indexOf(clickedMonth);
    const data = monthDB[index][clickedMonth];
    setTimeout(() => {
      setMonth(clickedMonth);
      setMeaning(data && data.map((line, i) => <p key={i}>{line}</p>));
      setClickMonthState({ clickMonth: true })
    }, 350);

  };

  return (
    <div class="content">
      {/* Home Link */}
      <nav>
        <a
          href="https://bernadetteestacio.site/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Home
          </a>
      </nav>

      <main>
        <MonthMenu
          monthsList={monthsList}
          showMeaning={showMeaning}
        />
        <MainContent
          month={month}
          meaning={meaning}
          clickMonthState={clickMonthState} />
      </main>

      <footer>
        <p>© 2015-{new Date().getFullYear()} Bernadette Estacio
          </p>
      </footer>
    </div>
  );
}

export default App;