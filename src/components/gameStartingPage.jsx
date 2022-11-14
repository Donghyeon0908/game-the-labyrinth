import React from "react";
import { styled } from "@stitches/react";

import GameStartingPageHeader from "./gameStartingPageHeader";
import gameStaringBackgroundImage from "../assets/images/initImage.png";
import Button from "./button";

function GameStartingPage() {
  return (
    <GameStartingPageContainer>
      <GameStartingPageHeader />
      <ButtonContainer>
        <Button buttonName="Game Guide" />
        <Button buttonName="Game Start" />
      </ButtonContainer>
    </GameStartingPageContainer>
  );
}

const GameStartingPageContainer = styled("div", {
  width: "100%",
  height: "100vh",
  backgroundImage: `url(${gameStaringBackgroundImage})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "100%",
});

const ButtonContainer = styled("div", {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "10rem",
});

export default GameStartingPage;
