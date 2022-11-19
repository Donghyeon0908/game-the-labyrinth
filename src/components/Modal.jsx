import React from "react";
import ReactDOM from "react-dom";

import { styled } from "@stitches/react";

function Portal({ children }) {
  const modalRoot = document.getElementById("portal-root");
  return ReactDOM.createPortal(children, modalRoot);
}

function Modal({ animation, children, isOpenModal, handleIsOpenModal }) {
  if (!isOpenModal) {
    return null;
  }

  const handleModalClose = (event) => {
    event.stopPropagation();

    if (event.currentTarget === event.target) {
      handleIsOpenModal(false);
    }
  };

  return (
    <Portal>
      <ModalContainer onClick={handleModalClose}>
        <ModalInner
          css={{
            animation: `${animation}`,
          }}
        >
          <CloseButton onClick={() => handleIsOpenModal(false)}>
            닫기
          </CloseButton>
          {children}
        </ModalInner>
      </ModalContainer>
    </Portal>
  );
}

const ModalContainer = styled("div", {
  position: "fixed",
  top: "0",
  left: "0",
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.45)",
  zIndex: "1",
});

const ModalInner = styled("div", {
  position: "fixed",
  top: "20%",
  left: "37%",
  width: "30vw",
  height: "50vh",
  maxWidth: "30rem",
  maxHeight: "40rem",
  background: "#fff",
  borderRadius: "3px",
});

const CloseButton = styled("button", {
  position: "absolute",
  top: "5px",
  right: "5px",
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

export default Modal;
