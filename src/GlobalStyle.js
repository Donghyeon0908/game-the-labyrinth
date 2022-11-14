import { globalCss } from "@stitches/react";

const GlobalStyle = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },

  body: {
    margin: 0,
    padding: 0,
    fontFamily: "dunggeunmo",
    fontSize: "16",
  },
});

export default GlobalStyle;
