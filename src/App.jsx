import React from "react";
import { Route, Routes } from "react-router-dom";
import GameStartingPage from "./components/gameStartingPage";
import GameView from "./components/gameView";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<GameStartingPage />} />
        <Route path="/game" element={<GameView />} />
      </Routes>
    </>
  );
}
export default App;
