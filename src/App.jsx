import React from "react";
import { Route, Routes } from "react-router-dom";

import GameStartingPage from "./components/GameStartingPage";
import GamePlayPage from "./components/GamePlayPage";
import Music from "./components/music/Music";
import GlobalStyle from "./GlobalStyle";
import NotFoundPage from "./components/NotFoundPage";

function App() {
  GlobalStyle();

  return (
    <>
      <Music />
      <Routes>
        <Route path="/" element={<GameStartingPage />} />
        <Route path="/game" element={<GamePlayPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
export default App;
