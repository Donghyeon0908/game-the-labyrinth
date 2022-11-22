import React from "react";

import { styled } from "@stitches/react";

function ClearMessage() {
  return <MessageContainer>성공!</MessageContainer>;
}

const MessageContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#9494949a",
  width: "100%",
  height: "100%",
  fontSize: "5rem",
});

export default ClearMessage;
