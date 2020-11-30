import React, { Component } from "react";
import { getMonths } from "./months";

class App extends Component {
  state = {
    monthDB: getMonths(),
    month: null,
    meaning: null
  };

  setMeaning = ev => {
    this.setState({
      month: null,
      meaning: null
    });
    let clickedMonth = ev.currentTarget.id;
    const index = this.props.monthMenu.indexOf(clickedMonth);
    const months = [...this.state.monthDB];
    const data = months[index][clickedMonth];
    setTimeout(
      function () {
        this.setState({
          month: clickedMonth,
          meaning: data.map((line, i) => <p key={i}>{line}</p>)
        });
      }.bind(this),
      350
    );
  };

  render() {
    const { month, meaning } = this.state;

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
            monthMenu={this.props.monthMenu}
            setMeaning={this.setMeaning}
          />
          <MainContent month={month} meaning={meaning} />
        </main>

        <footer>
          <p>© 2015-{new Date().getFullYear()} Bernadette Estacio
          </p>
        </footer>
      </div>
    );
  }
}

const MonthMenu = ({ monthMenu, setMeaning }) => {
  return (
    <div className="sidenav">
      <p>Select Your Birth Month:</p>
      <ul>
        {monthMenu.map(month => (
          <li key={month} id={month} onClick={setMeaning}>
            {month}
          </li>
        ))}
      </ul>
    </div>
  );
};

const MainContent = ({ month, meaning }) => {
  return (
    <div className="mainContent">
      <h1>Birth Month Meaning</h1>
      <hr className="hrStyle" />
      <h2>{month}</h2>
      <div>{meaning}</div>
    </div>
  );
};

App.defaultProps = {
  monthMenu: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
};

export default App;
