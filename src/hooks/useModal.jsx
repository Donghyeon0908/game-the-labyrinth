import React, { useState } from "react";
import Modal from "../components/modal/Modal";

function useModal(initialState = false) {
  const [isOpenModal, setIsOpenModal] = useState(initialState);

  const handleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const customModal = ({ animation, children }) => {
    return (
      <Modal
        animation={animation}
        isOpenModal={isOpenModal}
        handleIsOpenModal={setIsOpenModal}
      >
        {children}
      </Modal>
    );
  };

  return [customModal, handleModal];
}

export default useModal;
