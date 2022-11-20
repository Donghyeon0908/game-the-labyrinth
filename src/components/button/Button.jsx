import React from "react";

import { styled } from "@stitches/react";

import { fadeIn } from "../../utils/animations";

function Button({ onClick, buttonName }) {
  return <ButtonWrapper onClick={onClick}>{buttonName}</ButtonWrapper>;
}

const ButtonWrapper = styled("button", {
  margin: "0.2rem",
  padding: "0.6rem",
  borderRadius: "7px",
  backgroundColor: "#bfbbbc",
  boxShadow: `0 0.1em #636262`,
  color: "#636262",
  fontFamily: "dunggeunmo",
  textShadow: "-1px -1px ##000000, 1px 1px #fffff",
  fontSize: "1.7vw",
  cursor: "pointer",
  animation: `${fadeIn}`,

  "&:hover": {
    backgroundColor: "#979797e5",
  },

  "&:active": {
    boxShadow: "none",
  },
});

export default Button;
