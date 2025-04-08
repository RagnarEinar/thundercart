import styled, { css, keyframes } from "styled-components";

// Animation for error shake
const shake = keyframes`
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-15px); }
  50% { transform: translateX(15px); }
  75% { transform: translateX(-15px); }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; /* Center everything horizontally */
  padding: 1.5rem;
  width: 100%;
  font-size: 1rem;
  height: calc(100vh - 60px);
  @media (max-width: 768px) {
    font-size: 0.9rem;
    height: calc(100vh - 46px);
  }
`;


export const Container = styled.div<{ $hasError?: boolean }>`
  display: flex;
  flex-direction: column;
  width: 350px;
  border-radius: 10px;
  margin: 0.6rem 0rem;
  background: ${({ theme }) => theme.wrapperBack};
  box-shadow: 0 10px 20px ${({ theme }) => theme.heavyBoxShadow};
  padding: 0.5rem 0.5rem 1rem 0.5rem;
  transform: translateX(85%); /* Push it to the right from center */

  ${({ $hasError }) =>
    $hasError &&
    css`
      animation: ${shake} 0.3s ease;
    `}

  @media (max-width: 768px) {
    transform: none; /* Reset transform on mobile for better UX */
    padding: 0.5rem 0.5rem 2rem 0.5rem;
  }
`;


export const Title = styled.h1`
  font-size: 1.3rem;
  color: rgba(249, 118, 3, 1);
  text-align: center;
  margin: 0.5rem 0rem;
  font-weight: 700;
`;

export const LoginForm = styled.form`
  width: 100%;
  padding: 0px;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

export const RegisterForm = styled.form`
  width: 100%;
  padding: 0px;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 0.3rem; /* Increased gap between label and input */
`;

export const Label = styled.label`
  font-weight: 500;
  color: ${({ theme }) => theme.color};
  margin-bottom: 0.6rem;
  font-size: 0.9rem;
`;

export const ErrorMessage = styled.span`
  color: rgb(234, 26, 26);
  margin-top: 0.6rem;
  font-size: 0.9rem;
  align-self: center;
`;
export const Input = styled.input`
  padding: 0.7rem 1rem;
  border: 1px solid #ccc; /* Light gray border */
  border-radius: 8px;
  width: 100%;
  box-sizing: border-box;
  font-size: 0.9rem;
  transition: border 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    outline: none;
    border-color: #f9f9f9;
    box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
  }

  &::placeholder {
    color: #888;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: auto;
  width: 80%;
`;

export const Button = styled.button`
  color: white;
  border: none;
  padding: 0.75rem 1.2rem;
  cursor: pointer;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  width: fit-content;
  transition: background 0.3s ease, transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

export const LoginButton = styled(Button)`
  width: 100%;
  background: rgba(67, 247, 18, 0.92);
  &:hover {
    background: rgba(0, 169, 28, 0.95);
  }
`;

export const SignUpButton = styled(Button)`
  width: 100%;
  background: rgba(67, 247, 18, 0.92);
  &:hover {
    background: rgba(0, 169, 28, 0.95);
  }
`;
export const SignUpText = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.color};
  font-size: 0.9rem;
`;

export const SignUpLink = styled.span`
  font-size: 0.9rem;
  font-weight: 700;
  color: rgba(249, 118, 3, 1);
  cursor: pointer;
  margin-left: 0.7rem;
  &:hover {
    opacity: 0.8;
  }
`;

export const PageNotFound = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.badgeBackground};
  font-size: 1.2rem;
  padding: 20px;
  font-weight: 600;
  line-height: 1.6;
`;
