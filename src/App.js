import React from "react";

import "./App.css";
import Card from "./components/card.jsx";

import banana from "../src/assets/images/banana.jpg";

const Cards = [
  {
    name: "Banana",
    url: banana,
    transcription: "|bəˈnɑːnə|",
    translation: "банан",
  },
];

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {" "}
        {Cards.map((card) => (
          <Card url={card.url} name={card.name} transcription={card.transcription} translation={card.translation}>
            {" "}
          </Card>
        ))}{" "}
      </div>
    );
  }
}

export default App;
