import React, { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {
  Container,
  ErrorMessage,
  FgTitle,
  ForgetPasswordButton,
  ForgetPasswordContainer,
  Input,
  Wrapper,
} from "../styled.components";

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const handleForgotPassword = async () => {
    const auth = getAuth();
    try {
      if (!email) {
        setMessage("Please enter your email address.");
        return;
      }
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent. Please check your inbox.");

      navigate("/login");
    } catch (error: unknown) {
      setMessage("An Error occurred try again later");
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log("An unexpected error occurred.");
      }
    }
  };

  return (
    <Wrapper>
      <Container>
        <ForgetPasswordContainer>
          <FgTitle>Forgot Password ?</FgTitle>
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <ForgetPasswordButton onClick={handleForgotPassword}>
            Send Reset Email
          </ForgetPasswordButton>
          {message && <ErrorMessage>{message}</ErrorMessage> }
        </ForgetPasswordContainer>
      </Container>
    </Wrapper>
  );
};

export default ForgotPassword;
