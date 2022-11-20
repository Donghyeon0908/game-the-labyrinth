import React from "react";

import { styled } from "@stitches/react";

import backgroundImage from "../assets/images/dungeon.png";
import GameContext from "./game/GameContext";
import View from "./game/View";
import GameInitSetting from "./game/GameInitSetting";
import GameController from "./game/GameController";

function GameView() {
  return (
    <GameContainer>
      <GameInitSetting />
      <GameController />
      <GameContext>
        <View />
      </GameContext>
    </GameContainer>
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

export default GameView;
