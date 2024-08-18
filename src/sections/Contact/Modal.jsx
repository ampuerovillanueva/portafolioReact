import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 500px;
  max-width: 100%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

const ModalTitle = styled.h2`
  margin-top: 0;
  color: black; /* Estilo añadido */
`;

const ModalMessage = styled.p`
  margin-bottom: 0;
  color: black; /* Estilo añadido */
`;

const Modal = ({ show, onClose, title, message }) => {
  if (!show) {
    return null;
  }

  return (
    <Overlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <ModalTitle>{title}</ModalTitle>
        <ModalMessage>{message}</ModalMessage>
      </ModalContent>
    </Overlay>
  );
};

export default Modal;
