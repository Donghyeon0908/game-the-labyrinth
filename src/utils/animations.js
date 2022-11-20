import { keyframes } from "@stitches/react";

const unfoldInkeyframes = keyframes({
  "0%": {
    transform: "scaleX(0) scaleY(0.005)",
  },
  "50%": {
    transform: "scaleX(1) scaleY(0.005)",
  },
  "100%": {
    transform: "scaleY(1) scaleX(1)",
  },
});

const fadeInkeyframes = keyframes({
  from: {
    opacity: "0",
  },
  to: {
    opacity: "1",
  },
});

export const unfoldIn = `${unfoldInkeyframes} 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards`;

export const fadeIn = `${fadeInkeyframes} 2.5s`;
