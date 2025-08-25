import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FreelanceMarketplace from "./pages/FreelancerMarketplace";
import LiveSessions from "./pages/LiveSessions";
import Minigames from "./pages/MiniGames";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/marketplace" element={<FreelanceMarketplace />} />
        <Route path="/livesessions" element={<LiveSessions />} />
          <Route path="/minigames" element={<Minigames />} />
      </Routes>
    </Router>
  );
}

export default App;
