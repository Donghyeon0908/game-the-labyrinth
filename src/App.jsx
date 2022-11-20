import React from "react";
import { Route, Routes } from "react-router-dom";

import GameStartingPage from "./components/gameStartingPage";
import GameView from "./components/gameView";
import Music from "./components/game/Music";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Music />
      <Routes>
        <Route path="/" element={<GameStartingPage />} />
        <Route path="/game" element={<GameView />} />
      </Routes>
    </>
  );
}
export default App;
