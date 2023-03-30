import React from "react";

import { styled } from "@stitches/react";

function FailedMessage() {
  return (
    <MessageContainer>
      가장 빠른길로 한번에 가야해요
      <br /> 다시 도전해주세요!
    </MessageContainer>
  );
}

const MessageContainer = styled("p", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#9494949a",
  width: "100%",
  height: "100%",
  fontSize: "1.5rem",
});

export default FailedMessage;
