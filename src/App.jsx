import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import GameStartingPage from "./components/GameStartingPage";
import GamePlayPage from "./components/GamePlayPage";
import Music from "./components/music/Music";
import GlobalStyle from "./GlobalStyle";
import NotFoundPage from "./components/NotFoundPage";

function App() {
  GlobalStyle();

  useEffect(() => {
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      alert("이 서비스는 모바일에서 이용할 수 없습니다. PC에서 이용해주세요.");
      window.location.href = "about:blank";
    }
  }, []);

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
