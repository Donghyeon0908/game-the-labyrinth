import React from "react";
import { styled } from "@stitches/react";

function GameStartingPageHeader() {
  return <HeaderContainer>The Labyrinth</HeaderContainer>;
}

const HeaderContainer = styled("header", {
  display: "flex",
  position: "relative",
  top: "10%",
  alignItems: "center",
  justifyContent: "center",
  color: "#BD0505",
  fontSize: "5rem",
  fontWeight: 600,
});

export default GameStartingPageHeader;
