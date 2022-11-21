import React, { useEffect } from "react";

import { styled } from "@stitches/react";

import BGM from "../../assets/audios/enigmatic.mp3";
import fail from "../../assets/audios/fail.mp3";
import success from "../../assets/audios/success.mp3";
import useStore from "../../store/useStore";

function Music() {
  const isSuccess = useStore((state) => state.isSuccess);
  const isClear = useStore((state) => state.isClear);
  const audio = new Audio(BGM);
  const startMusic = () => {
    audio.play();
  };
  const stopMusic = () => {
    audio.pause();
  };

  useEffect(() => {
    const failSound = new Audio(fail);

    if (!isSuccess) {
      failSound.play();
    }
  }, [isSuccess]);

  useEffect(() => {
    const successSound = new Audio(success);

    if (isClear) {
      successSound.play();
    }
  }, [isClear]);

  return (
    <>
      <MusicButton
        type="button"
        onClick={startMusic}
        css={{ top: "5px", left: "5px" }}
      >
        BGMplay
      </MusicButton>
      <MusicButton
        type="button"
        onClick={stopMusic}
        css={{ top: "5px", left: "3.7%" }}
      >
        BGMstop
      </MusicButton>
    </>
  );
}

const MusicButton = styled("button", {
  position: "absolute",
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
