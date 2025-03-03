import { styled } from "styled-components";
import { Button } from "../../../Login/styled.components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

export const ModalContent = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  max-width: 500px;
  width: 90%;
  box-shadow: 0px 4px 12px ${({ theme }) => theme.mediumBoxShadow};
  max-height: 80vh;
  overflow-y: auto;
  scrollbar-width: none;
  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  h2 {
    text-align: center;
    margin-bottom: 1rem;
    color: #222;
    font-size: 1.5rem;
  }
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #444;
  }

  input,
  textarea {
    padding: 0.8rem;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 1rem;
    transition: all 0.3s;

    &:focus {
      border-color: #007bff;
      outline: none;
      box-shadow: 0px 0px 5px rgba(0, 123, 255, 0.5);
    }
  }

  textarea {
    resize: vertical;
    min-height: 100px;
  }
`;

export const DropDown = styled.select`
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  background-color: #fff;
  color: #333;
  cursor: pointer;
  transition: border-color 0.3s ease-in-out;
  box-shadow: 0px 4px 8px ${({ theme }) => theme.mediumBoxShadow};

  &:focus {
    border-color: #007bff;
    outline: none;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const Error = styled.span`
  color: red;
  font-size: 0.9rem;
  margin-top: 0.3rem;
`;

export const SubmitButton = styled(Button)`
  padding: 0.9rem 1.5rem;
  background-color: #007bff;
  font-size: 1rem;
  border-radius: 6px;
  transition: background-color 0.3s ease-in-out, transform 0.2s;
  text-transform: uppercase;
  font-weight: bold;

  &:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.98);
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.8rem 1.2rem;
  }
`;
