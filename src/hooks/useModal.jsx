import React, { useState } from "react";
import Modal from "../components/Modal";

function useModal(initialState = false) {
  const [isOpenModal, setIsOpenModal] = useState(initialState);

  const handleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const customModal = ({ children }) => {
    return (
      <Modal isOpenModal={isOpenModal} handleIsOpenModal={setIsOpenModal}>
        {children}
      </Modal>
    );
  };

  return [customModal, handleModal];
}

export default useModal;
