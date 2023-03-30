import React from "react";
import { useNavigate } from "react-router-dom";

import { styled } from "@stitches/react";

import { BUTTON_NAME } from "../constants/constants";
import backgroundImage from "../assets/images/404.webp";
import Button from "./buttons/Button";

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <NotFoundPageContainer>
      <NotFoundImg src={backgroundImage} />
      <ButtonWrapper>
        <Button onClick={() => navigate("/")} buttonName={BUTTON_NAME.BACK} />
      </ButtonWrapper>
    </NotFoundPageContainer>
  );
}

const NotFoundImg = styled("img", {
  width: "100%",
  height: "100vh",
  objectFit: "cover",
});

const NotFoundPageContainer = styled("div", {
  position: "relative",
  width: "100%",
  height: "100vh",
});

const ButtonWrapper = styled("div", {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
});

export default NotFoundPage;
