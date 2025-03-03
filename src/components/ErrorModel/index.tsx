import React from "react";
import styled from "styled-components";
import { Button } from "../../pages/Login/styled.components";

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
  backdrop-filter: blur(6px);
  padding: 20px;
`;

const ModalContent = styled.div`
  background-color: ${({ theme }) => theme.background};
  border-radius: 12px;
  width: 100%;
  max-width: 500px;
  padding: 1rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  text-align: center;
  font-family: "Roboto", sans-serif;

  @media (max-width: 768px) {
    max-width: 90%;
    padding: 16px;
  }

  @media (max-width: 480px) {
    max-width: 95%;
    padding: 12px;
  }
`;

const ModalHeader = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 16px;
  color: #d32f2f;
  font-weight: 700;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const ModalBody = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
  line-height: 1.6;
  padding: 0rem 2rem;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
`;

const ModalButton = styled(Button)<{ primary?: boolean }>`
  background-color: ${({ primary }) => (primary ? "#e53935" : "#f8d7da")};
  color: ${({ primary }) => (primary ? "#fff" : "#721c24")};
  font-size: 1rem;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: ${({ primary }) => (primary ? "#d32f2f" : "#f5c6cb")};
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(2px);
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    padding: 8px 16px;
    font-size: 0.9rem;
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
