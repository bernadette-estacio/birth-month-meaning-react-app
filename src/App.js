import React, { Component } from "react";

class App extends Component {
  state = {
    meaning: null
  };

  setMeaning = ev => {
    let clickedMonth = ev.currentTarget.id;
    this.setState({
      month: clickedMonth,
      meaning: this.props.months[clickedMonth].map((line, i) => (
        <p key={i}>{line}</p>
      ))
    });
  };

  render() {
    return (
      <div>
        {/* Home Link */}
        <nav>
          <a
            href="http://bernadetteengleman.com/index.html"
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
          <MainContent month={this.state.month} meaning={this.state.meaning} />
        </main>

        <footer>
          <p>
            <small>
              Copyright © 2015-{new Date().getFullYear()} Bernadette Estacio.
              All rights reserved
            </small>
          </p>
        </footer>
      </div>
    );
  }
}

const MonthMenu = props => {
  return (
    <div className="sidenav">
      <p>Select Your Birth Month:</p>
      <ul>
        {props.monthMenu.map((month, i) => (
          <li key={month} id={month} onClick={props.setMeaning}>
            {month}
          </li>
        ))}
      </ul>
    </div>
  );
};

const MainContent = props => {
  return (
    <div className="mainContent">
      <h1>Birth Month Meaning</h1>
      <hr className="hrStyle" />
      <h2>{props.month}</h2>
      <div>{props.meaning}</div>
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
  ],
  months: {
    January: [
      "Ambitious and serious",
      "Loves to teach and be taught",
      "Always looking at people's flaws and weaknesses",
      "Likes to criticize",
      "Hardworking and productive",
      "Smart, neat and organized",
      "Sensitive and has deep thoughts",
      "Knows how to make others happy",
      "Quiet unless excited or tensed",
      "Rather reserved",
      "Highly attentive",
      "Resistant to illnesses but prone to colds",
      "Romantic but has difficulties expressing love",
      "Loves children",
      "Homely person",
      "Loyal",
      "Needs to improve social abilities",
      "Easily jealous"
    ],
    February: [
      "Abstract thoughts",
      "Loves reality and abstract",
      "Intelligent and clever",
      "Changing personality",
      "Temperamental",
      "Quiet, shy and humble",
      "Low self esteem",
      "Honest and loyal",
      "Determined to reach goals",
      "Loves freedom",
      "Rebellious when restricted",
      "Loves aggressiveness",
      "Too sensitive and easily hurt",
      "Showing anger easily",
      "Dislike unnecessary things",
      "Loves making friends but rarely shows it",
      "Daring and stubborn",
      "Ambitious",
      "Realizing dreams and hopes",
      "Sharp",
      "Loves entertainment and leisure",
      "Romantic on the inside not outside",
      "Superstitious and ludicrous",
      "Spendthrift",
      "Learns to show emotions"
    ],
    March: [
      "Attractive personality",
      "Affectionate",
      "Shy and reserved",
      "Secretive",
      "Naturally honest",
      "generous and sympathetic",
      "Loves peace and serenity",
      "Sensitive to others",
      "Loves to serve others",
      "Not easily angered",
      "Trustworthy",
      "Appreciative and returns kindness",
      "Observant and assess others",
      "Revengeful",
      "Loves to dream and fantasize",
      "Loves traveling",
      "Loves attention",
      "Hasty decisions in choosing partners",
      "Loves home decors",
      "Musically talented",
      "Loves special things",
      "Moody"
    ],

    April: [
      "Active and dynamic",
      "Decisive and haste but tends to regret",
      "Attractive and affectionate to oneself",
      "Strong mentality",
      "Loves attention",
      "Diplomatic",
      "Consoling",
      "Friendly and solves people's problems",
      "Brave and fearless",
      "Adventurous",
      "Loving and caring",
      "Suave and generous",
      "Emotional",
      "Revengeful",
      "Aggressive",
      "Hasty",
      "Good memory",
      "Moving",
      "Motivate one and the others",
      "Sickness usually of the head and chest",
      "Easily get too jealous"
    ],
    May: [
      "Stubborn and hard-hearted",
      "Strong-willed and highly motivated",
      "Sharp thoughts",
      "Easily angered",
      "Attracts others and loves attention",
      "Deep feelings",
      "Beautiful physically and mentally",
      "Firm standpoint",
      "Easily influenced",
      "Needs no motivation",
      "Easily consoled",
      "Systematic (left brain)",
      "Loves to dream",
      "Strong clairvoyance",
      "Understanding",
      "Sickness usually in the ear and neck",
      "Good imagination",
      "Good debating skills",
      "Good physical",
      "Weak breathing",
      "Loves literature and the arts",
      "Loves traveling",
      "Dislike being at home",
      "Restless",
      "Not having many children",
      "Hardworking",
      "High-spirited",
      "Spendthrift"
    ],
    June: [
      "Thinks far with vision",
      "Easily influenced by kindness",
      "Polite and soft-spoken",
      "Having lots of ideas",
      "Sensitive",
      "Active mind",
      "Hesitating",
      "Tends to delay",
      "Choosy and always wants the best",
      "Temperamental",
      "Funny and humorous",
      "Loves to joke",
      "Good debating skills",
      "Talkative",
      "Daydreamer",
      "Friendly",
      "Knows how to make friends",
      "Abiding",
      "Able to show character",
      "Easily hurt",
      "Prone to getting colds",
      "Loves to dress up",
      "Easily bored",
      "Fussy",
      "Seldom show emotions",
      "Takes time to recover when hurt",
      "Brand conscious",
      "Executive",
      "Stubborn"
    ],
    July: [
      "Fun to be with",
      "Secretive",
      "Difficult to fathom and to be understood",
      "Quiet unless excited or tensed",
      "Takes pride in oneself",
      "Has reputation",
      "Easily consoled",
      "Honest",
      "Concern about people's feelings",
      "Tactful",
      "Friendly",
      "Approachable",
      "Very emotional",
      "Temperamental and unpredictable",
      "Moody and easily hurt",
      "Witty and starkly",
      "Sentimental",
      "Not revengeful",
      "Forgiving but never forgets",
      "Dislike nonsensical and unnecessary things",
      "Guides others physically and mentally",
      "Sensitive and forms impressions carefully",
      "Caring and loving",
      "Treats others equally",
      "Strong sense of sympathy",
      "Wary and sharp",
      "Judge people through observations",
      "Hardworking",
      "No difficulties in studying",
      "Loves to be alone",
      "Always broods about the past and the old friends",
      "Likes to be quiet",
      "Homely person",
      "Waits for friends",
      "Never looks for friends",
      "Not aggressive unless provoked",
      "Prone to having stomach and dieting problems",
      "Loves to be loved",
      "Easily hurt but takes long to recover",
      "Overly concerned",
      "Puts in effort in work"
    ],
    August: [
      "Loves to joke",
      "Attractive",
      "Suave and caring",
      "Brave and fearless",
      "Firm and has leadership qualities",
      "Knows how to console others",
      "Too generous and egoistic",
      "Tacked high pride of oneself",
      "Thirsty for praises",
      "Extraordinary spirit",
      "Easily angered",
      "Angry when provoked",
      "Easily jealous",
      "Observant",
      "Careful and cautious",
      "Thinks quickly Independent thoughts",
      "Loves to lead and to be led",
      "Loves to dream",
      "Talented in the arts",
      "music and defense",
      "Sensitive but not petty",
      "Learns to relax",
      "Hasty and rushy",
      "Romantic",
      "Loving and caring",
      "Loves to make friends"
    ],
    September: [
      "Suave and compromising",
      "Careful, cautious and organized",
      "Likes to point out people's mistakes",
      "Quiet but able to talk well",
      "Calm and cool",
      "Kind and sympathetic",
      "Concerned and detailed",
      "Trustworthy, loyal and honest",
      "Does work well",
      "Sensitive",
      "Thinking",
      "Good memory",
      "Clever and knowledgeable",
      "Loves to look for information",
      "Must control oneself when criticizing",
      "Able to motivate oneself",
      "Understanding",
      "Secretive",
      "Loves sports, leisure and traveling",
      "Hardly shows emotions",
      "Tends to bottle up feelings",
      "Choosy especially in relationships",
      "Loves wide things",
      "Systematic"
    ],
    October: [
      "Loves to chat",
      "Loves those who loves him",
      "Loves to takes things at the center",
      "Attractive and suave",
      "Inner and physical beauty",
      "Sympathetic",
      "Treats friends importantly",
      "Always making friends",
      "Easily hurt but recovers easily",
      "Bad tempered",
      "Selfish",
      "Seldom helps unless asked",
      "Daydreamer",
      "Very opinionated",
      "Does not care of what others think",
      "Emotional",
      "Decisive",
      "Strong clairvoyance",
      "Loves to travel, the arts and literature",
      "Soft-spoken, loving and caring",
      "Romantic",
      "Touchy and easily jealous",
      "Concerned",
      "Loves outdoors",
      "Just and fair",
      "Spendthrift and easily influenced",
      "Easily lose confidence"
    ],
    November: [
      "Have a lot of ideas",
      "Difficult to fathom",
      "Thinks forward",
      "Unique and brilliant",
      "Extraordinary ideas",
      "Sharp thinking",
      "Fine and strong clairvoyance",
      "Can become good doctors",
      "Careful and cautious",
      "Dynamic in personality",
      "Secretive",
      "Inquisitive",
      "Knows how to dig secrets",
      "Always thinking",
      "Less talkative but amiable",
      "Brave and generous",
      "Patient",
      "Stubborn and hard-hearted",
      "Determined",
      "Never give up",
      "Hardly become angry unless provoked",
      "Loves to be alone",
      "Thinks differently from others",
      "Sharp-minded",
      "Motivates oneself",
      "Does not appreciates praises",
      "High-spirited",
      "Well-built and tough",
      "Deep love and emotions",
      "Romantic",
      "Uncertain in relationships",
      "Homely",
      "Hardworking",
      "High abilities",
      "Trustworthy",
      "Honest and keeps secrets",
      "Not able to control emotions",
      "Unpredictable"
    ],
    December: [
      "Loyal and generous",
      "Patriotic",
      "Active in games and interactions",
      "Impatient and hasty",
      "Ambitious",
      "Influential in organizations",
      "Fun to be with",
      "Loves to socialize",
      "Loves praises",
      "Loves attention",
      "Loves to be loved",
      "Honest and trustworthy",
      "Not pretending",
      "Short tempered",
      "Changing personality",
      "Not egoistic",
      "Tacked high pride in oneself",
      "Hates restrictions",
      "Loves to joke",
      "Good sense of humor",
      "Logical"
    ]
  }
};

export default App;
