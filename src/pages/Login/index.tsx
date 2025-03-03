import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { LoginState, resetLogin, signInRequest } from "../../data/slices/login";
import { RootState } from "../../data/store";
import { resetRegister } from "../../data/slices/register";
import {
  Container,
  Title,
  FormGroup,
  Label,
  Input,
  ErrorMessage,
  ButtonContainer,
  LoginButton,
  SignUpText,
  SignUpLink,
  Wrapper,
  LoginForm,
} from "./styled.components";
import { toast } from "react-toastify";
import ForgotPassword, { ForgotPasswordLink } from "./ForgotPassword";
import Loader from "../../components/Loader";

export interface LoginFormInputs {
  email: string;
  password: string;
}
const Login: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();
  const [hasError, setHasError] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userDetails, error, isLogging } = useSelector<RootState, LoginState>(
    (state) => state.login
  );

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    dispatch(resetRegister());
    dispatch(signInRequest(data));
    setHasError(false);
  };

  const handleForgotPassword = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    if (userDetails?.email) {
      toast.success("Login successful...");
      const targetRoute = userDetails.role === "admin" ? "/admin" : "/products";
      navigate(targetRoute);
    } else if (error) {
      toast.error("Login failed, Please retry later...");
      setHasError(true);
      dispatch(resetLogin());
    }
  }, [userDetails, error, navigate, dispatch]);

  const renderErrorMessage = (message?: string) => {
    return message ? <ErrorMessage>{message}</ErrorMessage> : null;
  };
  if (isLogging) {
    return <Loader message="Logging in..."/>;
  }

  return (
    <Wrapper>
      <Container $hasError={hasError}>
        <Title>Login</Title>
        <LoginForm onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <Label htmlFor="email">Email : </Label>
            <Input
              placeholder="Email"
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
            {renderErrorMessage(errors.email?.message)}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="password">Password :</Label>
            <Input
              placeholder="Password"
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
            {renderErrorMessage(errors.password?.message)}
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
              Forgot Password?
            </ForgotPasswordLink>
          </ButtonContainer>
        </LoginForm>
      </Container>
      {isModalOpen && (
        <ForgotPassword closeModal={() => setIsModalOpen(false)} />
      )}
    </Wrapper>
  );
};

export default Login;
