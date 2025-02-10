import React from "react";
import styled from "styled-components";

interface ErrorModalProps {
  header: string;
  body: string;
  primaryBtnText?: string;
  primaryBtnAction?: () => void;
  onClose: () => void;
}

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(4px);
`;

const ModalContent = styled.div`
  background-color: #fff;
  border-radius: 12px;
  width: 420px;
  max-width: 90%;
  padding: 24px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const ModalHeader = styled.h2`
  font-size: 1.6rem;
  margin-bottom: 12px;
  color: #d32f2f;
  font-weight: bold;
`;

const ModalBody = styled.p`
  font-size: 1rem;
  margin-bottom: 24px;
  color: #444;
  line-height: 1.5;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
`;

const ModalButton = styled.button<{ primary?: boolean }>`
  padding: 12px 24px;
  font-size: 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s;
  background-color: ${({ primary }) => (primary ? "#d32f2f" : "#f0f0f0")};
  color: ${({ primary }) => (primary ? "#fff" : "#333")};

  &:hover {
    background-color: ${({ primary }) => (primary ? "#b71c1c" : "#e0e0e0")};
  }
`;

const ErrorModal: React.FC<ErrorModalProps> = ({
  header,
  body,
  primaryBtnText,
  primaryBtnAction,
  onClose,
}) => {
  return (
    <ModalWrapper>
      <ModalContent>
        <ModalHeader>{header}</ModalHeader>
        <ModalBody>{body}</ModalBody>
        <ButtonWrapper>
          {primaryBtnText && primaryBtnAction && (
            <ModalButton primary onClick={primaryBtnAction}>
              {primaryBtnText}
            </ModalButton>
          )}
          <ModalButton onClick={onClose}>Close</ModalButton>
        </ButtonWrapper>
      </ModalContent>
    </ModalWrapper>
  );
};

export default ErrorModal;
