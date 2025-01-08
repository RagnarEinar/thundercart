import { styled } from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  max-height: 80vh;
  overflow-y: auto;
  scrollbar-width: none;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  h2 {
    text-align: center;
    margin-bottom: 1rem;
    color: #333;
  }
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: #555;
  }

  input,
  textarea {
    padding: 0.8rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
  }

  textarea {
    resize: vertical;
  }
`;

export const DropDown = styled.select`
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  background-color: #fff;
  color: #333;
  cursor: pointer;
  transition: border-color 0.3s, background-color 0.3s;
   box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);

  &:focus {
    background-color:rgba(255, 255, 255, 0.91)
    outline: none;

  }
`;
export const Error = styled.span`
  color: red;
  font-size: 0.9rem;
  margin-top: 0.3rem;
`;

export const SubmitButton = styled.button`
  padding: 0.8rem 1.5rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;
