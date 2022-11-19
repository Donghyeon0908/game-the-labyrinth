import { styled } from "@stitches/react";
import React from "react";
import BGM from "../../assets/audios/ofeliasdream.mp3";

function Music() {
  const audio = new Audio(BGM);
  const startMusic = () => {
    audio.play();
  };

  return (
    <MUSICButton type="button" onClick={startMusic}>
      BGMplay
    </MUSICButton>
  );
}

const MUSICButton = styled("button", {
  position: "absolute",
  top: "5px",
  left: "5px",
  margin: "0.2rem",
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

export default Music;
