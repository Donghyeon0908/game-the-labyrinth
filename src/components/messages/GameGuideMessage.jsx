import React from "react";

import { styled } from "@stitches/react";

function GameGuideMessage() {
  return (
    <MessageContainer>
      조작키 : W,S,A,D로 상하좌우 이동합니다.
      <br />
      출구까지 가는 단 하나의 길로 이동하세요! 그렇지 않을 경우 처음 위치로
      되돌아가게 됩니다. <br />
      가장 빠른길이 정답이 될 것 입니다.
      <br /> 출구에 도착하면 다음 스테이지로 이동합니다.
    </MessageContainer>
  );
}

const MessageContainer = styled("p", {
  position: "relative",
  top: "5%",
  fontSize: "1.2rem",
  whiteSpace: "pre-wrap",
});

export default GameGuideMessage;
