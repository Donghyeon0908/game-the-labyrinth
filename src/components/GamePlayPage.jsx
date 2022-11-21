import React, { useEffect } from "react";

import { styled } from "@stitches/react";

import backgroundImage from "../assets/images/dungeon.png";
import GameContext from "./game/GameContext";
import GameView from "./game/GameView";
import GameInitSetting from "./game/GameInitSetting";
import GamePathComparisonController from "./game/GamePathComparisonController";
import useStore from "../store/useStore";
import useModal from "../hooks/useModal";
import HintButton from "./game/HintButton";

function GamePlayPage() {
  const isClear = useStore((state) => state.isClear);
  const setIsClear = useStore((state) => state.setIsClear);
  const [ClearModal, handleModal] = useModal();

  useEffect(() => {
    if (isClear) {
      setIsClear(false);
      handleModal();
    }
  }, [isClear, setIsClear, handleModal]);

  return (
    <>
      <ClearModal>성공</ClearModal>
      <HintButton />
      <GameContainer>
        <GameInitSetting />
        <GamePathComparisonController />
        <GameContext>
          <GameView />
        </GameContext>
      </GameContainer>
    </>
  );
}

const GameContainer = styled("div", {
  display: "flex",
  width: "100%",
  height: "100vh",
  backgroundImage: `url(${backgroundImage})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "100%",
  justifyContent: "center",
  alignItems: "center",
});

export default GamePlayPage;
