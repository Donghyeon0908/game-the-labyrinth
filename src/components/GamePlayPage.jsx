import React, { useEffect } from "react";

import { styled } from "@stitches/react";

import backgroundImage from "../assets/images/dungeon.webp";
import GameContext from "./game/GameContext";
import GameView from "./game/GameView";
import GameInitSetting from "./game/GameInitSetting";
import GamePathComparisonController from "./game/GamePathComparisonController";
import useStore from "../store/useStore";
import useModal from "../hooks/useModal";
import HintButton from "./buttons/HintButton";
import ClearMessage from "./messages/ClearMessage";
import ImagesBuffer from "./game/ImagesBuffer";

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
      <ClearModal>
        <ClearMessage onClick={handleModal} />
      </ClearModal>
      <GameContainer>
        <HintButton />
        <GameInitSetting />
        <GamePathComparisonController />
        <ImagesBuffer />
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
  backgroundSize: "cover",
  justifyContent: "center",
  alignItems: "center",
});

export default GamePlayPage;
