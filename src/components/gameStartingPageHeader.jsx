import React from "react";
import { styled } from "@stitches/react";

function GameStartingPageHeader() {
  return <HeaderContainer>The Labyrinth</HeaderContainer>;
}

const HeaderContainer = styled("header", {
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "5rem",
  color: "#BD0505",
  fontSize: "5rem",
  fontWeight: 600,
});

export default GameStartingPageHeader;
