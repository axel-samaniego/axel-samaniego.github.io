import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GameApp } from "./Pages/connections-game/GameApp.tsx";
import Landing from "./Pages/Landing.tsx"; // Home screen

function App() {
  return (
    <Router>
   
        <Routes>
          {/* Home screen route */}
          <Route path="/" element={<Landing/>} />

          {/* Game screen route */}
          <Route path="/connections-game/" element={<GameApp/>} />
        </Routes>
        
    </Router>
  );
}

export default App;
