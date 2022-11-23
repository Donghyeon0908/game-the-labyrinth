import React from "react";
import { useNavigate } from "react-router-dom";

import { styled } from "@stitches/react";

import { BUTTON_NAME } from "../constants/constants";
import backgroundImage from "../assets/images/404.png";
import Button from "./button/Button";

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <NotFoundPageContainer>
      <Button onClick={() => navigate("/")} buttonName={BUTTON_NAME.BACK} />
    </NotFoundPageContainer>
  );
}

const NotFoundPageContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100vh",
  backgroundImage: `url(${backgroundImage})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "100%",
});

export default NotFoundPage;
