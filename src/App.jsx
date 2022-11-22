import React from "react";
import { Route, Routes } from "react-router-dom";

import GameStartingPage from "./components/GameStartingPage";
import GamePlayPage from "./components/GamePlayPage";
import Music from "./components/music/Music";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Music />
      <Routes>
        <Route path="/" element={<GameStartingPage />} />
        <Route path="/game" element={<GamePlayPage />} />
      </Routes>
    </>
  );
}
export default App;
