//TODO: STEP 1 - Import the useState hook.

import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import "./Timer.js";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

const [lionsScore, setLionsScore] = useState(0);
const [tigersScore, setTigersScore] = useState(0);

let homeTeam = "Lions";
let awayTeam = "Tigers";
// let timer = "00:00";

const lionsTd = elem => {
  setLionsScore(lionsScore + 7);
    if (lionsScore > 97){
      setLionsScore("Win")
      setTigersScore("Lose")
    } else if (lionsScore === "Win"){
      setLionsScore(0);
      setTigersScore(0);
    } else if (tigersScore === "Win"){
      setLionsScore(0);
      setTigersScore(0);
    }
}
const reset = elem => {
    setLionsScore(0);
    setTigersScore(0);
}
const lionsFg = elem => {
  setLionsScore(lionsScore + 3);
  if (lionsScore > 97){
    setLionsScore("Win")
    setTigersScore("Lose")
  } else if (lionsScore === "Win"){
    setLionsScore(0);
    setTigersScore(0);
  } else if (tigersScore === "Win"){
    setLionsScore(0);
    setTigersScore(0);
  }
}
const tigersTd = elem => {
  setTigersScore(tigersScore + 7);
  if (tigersScore > 97){
    setTigersScore("Win")
    setLionsScore("Lose")
  } else if (tigersScore === "Win"){
    setTigersScore(0);
    setLionsScore(0);
  } else if (lionsScore === "Win"){
    setLionsScore(0);
    setTigersScore(0);
  }
}
const tigersFg = elem => {
  setTigersScore(tigersScore + 3);
  if (tigersScore > 97){
    setTigersScore("Win")
    setLionsScore("Lose")
  } else if (tigersScore === "Win"){
    setTigersScore(0);
    setLionsScore(0);
  } else if (lionsScore === "Win"){
    setLionsScore(0);
    setTigersScore(0);
  }
}

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">{homeTeam}</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{lionsScore}</div>
          </div>
          <div className="timer">
            <span id="minutes"></span>:<span id="seconds"></span>
          </div>
          <div className="away">
            <h2 className="away__name">{awayTeam}</h2>
            <div className="away__score">{tigersScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="resetButtons">
          <a href="public/index.html" className="resetButton" onClick={reset}>New Game</a>
        </div>
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={lionsTd}>Home Touchdown</button>
          <button className="awayButtons__touchdown" onClick={tigersTd}>Away Touchdown</button>
          
        </div>
        <div className="awayButtons">
        <button className="homeButtons__fieldGoal" onClick={lionsFg}>Home Field Goal</button>
          <button className="awayButtons__fieldGoal" onClick={tigersFg}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
