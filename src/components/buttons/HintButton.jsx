import React from "react";

import { styled } from "@stitches/react";
import useStore from "../../store/useStore";

function HintButton() {
  const setIsHint = useStore((state) => state.setIsHint);

  const showHint = () => {
    setIsHint(true);

    setTimeout(() => {
      setIsHint(false);
    }, 500);
  };

  return <ButtonWrapper onClick={() => showHint()}>힌트</ButtonWrapper>;
}

const ButtonWrapper = styled("button", {
  position: "relative",
  margin: "0.1rem",
  padding: "0.3rem",
  top: "-35%",
  borderRadius: "8px",
  backgroundColor: "#bfbbbc",
  boxShadow: `0 0.1em #636262`,
  color: "#636262",
  fontFamily: "dunggeunmo",
  textShadow: "-1px -1px ##000000, 1px 1px #fffff",
  fontSize: "0.8rem",
  cursor: "pointer",

  "&:hover": {
    backgroundColor: "#979797e5",
  },

  "&:active": {
    boxShadow: "none",
  },
});

export default HintButton;
