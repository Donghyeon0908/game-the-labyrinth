import React from "react";
import { styled } from "@stitches/react";
import { useNavigate } from "react-router-dom";

import GameStartingPageHeader from "./gameStartingPageHeader";
import gameStaringBackgroundImage from "../assets/images/initImage.png";
import Button from "./button";
import useModal from "../hooks/useModal";

function GameStartingPage() {
  const [GuideModal, handleModal] = useModal();
  const navigate = useNavigate();

  return (
    <GameStartingPageContainer>
      <GameStartingPageHeader />
      <GuideModal>Game Guide</GuideModal>
      <ButtonContainer>
        <Button onClick={handleModal} buttonName="Game Guide" />
        <Button onClick={() => navigate("/game")} buttonName="Game Start" />
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
  display: "flex",
  position: "relative",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "10rem",
});

export default GameStartingPage;
