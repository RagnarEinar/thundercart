import React, { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { Button, ErrorMessage, Input, SignUpLink } from "../styled.components";
import { styled } from "styled-components";
import { toast } from "react-toastify";

export const ForgotPasswordLink = styled(SignUpLink)`
  text-align: center;
`;

export const ForgotPasswordContainer = styled.div`
  width: 100%;
  padding: 0rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const OrderModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: ${({ theme }) => theme.background};
  border-radius: 10px;
  padding: 1rem;
  width: 400px;
  box-shadow: 0 4px 20px ${({ theme }) => theme.mediumBoxShadow};
  position: relative;
  max-width: 500px;
  @media (max-width: 480px) {
    margin: 0rem 1rem;
  }
`;

export const FgTitle = styled.h1`
  font-weight: 700;
  text-align: center;
  line-height: 1.4;
  font-size: 1rem;
  margin-top: 0.2rem;
`;

export const FgContent = styled.p`
  font-size: 0.9rem;
  margin: 1rem auto 0rem auto;
  text-align: center;
  width: 100%;
  color: ${({ theme }) => theme.lightColor};
`;

export const BacktoLogin = styled.p`
  text-align: center;
  color: rgba(249, 118, 3, 1);
  cursor: pointer;
  font-size: 0.9rem;
`;

export const ForgotPasswordButton = styled(Button)`
  padding: 0.4rem 1rem;
  align-self: center;
  width: 50%;
  font-size: 1rem;
  background: rgba(67, 247, 18, 0.92);
  &:hover {
    background: rgba(0, 169, 28, 0.95);
  }

  @media (max-width: 480px) {
    width: 80%;
  }
`;

export const ForgotInput = styled(Input)`
  margin: 1rem 0rem 0rem 0rem;
  padding: 0.5rem 1rem;
  width: 80%;
  align-self: center;
`;

export interface ForgotPasswordProps {
  closeModal: () => void;
}

const ForgotPassword: React.FC<ForgotPasswordProps> = ({ closeModal }) => {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState("");

  const handleForgotPassword = async () => {
    const auth = getAuth();
    try {
      if (!email) {
        setMessage("Please enter your email address.");
        return;
      }
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset email sent. Please check your inbox.");
      closeModal();
    } catch (error: unknown) {
      setMessage("An error occurred, try again later.");
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log("An unexpected error occurred.");
      }
    }
  };

  return (
    <OrderModal>
      <ModalContent>
        <FgTitle>Reset your password</FgTitle>
        <FgContent>
          Enter the email address associated with your account and we'll send
          you a link to reset your password.
        </FgContent>
        <ForgotPasswordContainer>
          <ForgotInput
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {message && <ErrorMessage>{message}</ErrorMessage>}

          <ForgotPasswordButton onClick={handleForgotPassword}>
            Continue
          </ForgotPasswordButton>
          <BacktoLogin onClick={closeModal}>Back to Login</BacktoLogin>
        </ForgotPasswordContainer>
      </ModalContent>
    </OrderModal>
  );
};

export default ForgotPassword;
