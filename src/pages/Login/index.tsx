import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { LoginState, signInRequest } from "../../data/slices/login";
import { RootState } from "../../data/store";
import Loader from "../../components/Loader";
import { resetRegister } from "../../data/slices/register";
import {
  Container,
  Title,
  Form,
  FormGroup,
  Label,
  Input,
  ErrorMessage,
  ButtonContainer,
  LoginButton,
  SignUpText,
  SignUpLink,
  ForgotPasswordLink,
} from "./styled.components"; // Import the Message styled component

export interface LoginFormInputs {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLogging, userDetails, error } = useSelector<RootState, LoginState>(
    (s) => s.login
  );

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    dispatch(resetRegister());
    dispatch(signInRequest(data));
  };

  const handleForgotPassword = () => {
    navigate("/forgetpassword");
  };

  useEffect(() => {
    if (userDetails && userDetails.email !== "") {
      console.log("Login successful. Redirecting...");

      if (userDetails.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/products");
      }
    } else if (error !== null) {
      console.log("Login Failed. Please check your credentials.");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userDetails, error]);

  if (isLogging) {
    return <Loader />;
  }

  return (
    <Container>
      <Title>Login</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label htmlFor="email">Email:</Label>
          <Input
            type="email"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="password">Password:</Label>
          <Input
            type="password"
            id="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
            })}
          />
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
        </FormGroup>

        <ButtonContainer>
          <LoginButton type="submit">Login</LoginButton>
          <SignUpText>
            Don't have an account ?
            <SignUpLink onClick={() => navigate("/register")}>
              Register
            </SignUpLink>
          </SignUpText>
          <ForgotPasswordLink onClick={handleForgotPassword}>
            Forgot Password ?
          </ForgotPasswordLink>
        </ButtonContainer>
      </Form>
    </Container>
  );
};

export default Login;
