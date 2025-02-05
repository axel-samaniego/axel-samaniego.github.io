import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Game  from "./Pages/connections-game/Game.tsx";
import { gameData }from "./Pages/connections-game/gameData.ts";
// import Landing from "./Pages/Landing.tsx"; // Home screen

function App() {
  return  (
    <>
      <h1>Connections Game</h1>
      <div>
        <Game gameData={gameData} />
      </div>
      <br />
      <br />
      <p className="foot-disclaimer">
        Original game here:{" "}
        <a href="https://www.nytimes.com/games/connections">
          NY Times Connections
        </a>
        .<br />
        made for my beautiful angel princess girl
        <br />
        Created as an exercise. I claim no ownership.
      </p>
    </>
  );
}

export default App;
