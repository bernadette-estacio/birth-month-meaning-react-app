import React, { useState } from "react";
import Nav from "./components/Context/Nav/nav";
import Footer from "./components/Context/Footer/footer";
import MainContent from "./components/MainContent/mainContent";
import MonthMenu from "./components/Context/MonthMenu/monthMenu";

const App = () => {
  const [month, setMonth] = useState(null);
  const [meaning, setMeaning] = useState(null);
  const [clickMonth, setClickMonth] = useState(false);

  return (
    <div className="content">
      <Nav />

      <main>
        <MonthMenu
          month={month}
          setMonth={setMonth}
          setMeaning={setMeaning}
          setClickMonth={setClickMonth}
        />

        <MainContent month={month} meaning={meaning} clickMonth={clickMonth} />
      </main>

      <Footer />
    </div>
  );
};

export default App;
