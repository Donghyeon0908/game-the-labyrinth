import React from "react";
import { styled } from "@stitches/react";

function Button({ handleButtonClick, buttonName }) {
  return <ButtonWrapper>{buttonName}</ButtonWrapper>;
}

const ButtonWrapper = styled("button", {
  padding: "0.6rem",
  margin: "0.2rem",
  borderRadius: "7px",
  backgroundColor: "#bfbbbc",
  color: "#636262",
  fontFamily: "dunggeunmo",
  boxShadow: `0 0.1em #636262`,
  textShadow: "-1px -1px ##000000, 1px 1px #fffff",
  fontSize: "1.9rem",
  cursor: "pointer",

  "&:hover": {
    backgroundColor: "#979797e5",
  },

  "&:active": {
    boxShadow: "none",
  },
});

export default Button;
