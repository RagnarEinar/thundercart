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
  Wrapper,
} from "./styled.components";
import { toast } from "react-toastify";

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
  const [hasError, setHasError] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userDetails, error } = useSelector<RootState, LoginState>(
    (state) => state.login
  );

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    dispatch(resetRegister());
    dispatch(signInRequest(data));
    setHasError(false);
  };

  const handleForgotPassword = () => {
    navigate("/forgetpassword");
  };

  useEffect(() => {
    if (userDetails?.email) {
      console.log("Login successful. Redirecting...");
      toast.success("Login successful...");

      const targetRoute = userDetails.role === "admin" ? "/admin" : "/products";
      navigate(targetRoute);
    } else if (error) {
      console.error("Login failed:", error);
      toast.dismiss();
      toast.error("Login failed, Please retry later...");
      setHasError(true);
      dispatch(resetLogin());
    }
  }, [userDetails, error, navigate, dispatch]);

  const renderErrorMessage = (message?: string) => {
    return message ? <ErrorMessage>{message}</ErrorMessage> : null;
  };

  return (
    <Wrapper>
      <Container hasError={hasError}>
        <Title>Login</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          {/* Email Field */}
          <FormGroup>
            <Label htmlFor="email">Email :</Label>
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

          {/* Password Field */}
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

          {/* Buttons and Links */}
          <ButtonContainer>
            <LoginButton type="submit">Login</LoginButton>
            <SignUpText>
              Don't have an account?{" "}
              <SignUpLink onClick={() => navigate("/register")}>
                Register
              </SignUpLink>
            </SignUpText>
            <ForgotPasswordLink onClick={handleForgotPassword}>
              Forgot Password?
            </ForgotPasswordLink>
          </ButtonContainer>
        </Form>
      </Container>
    </Wrapper>
  );
};

export default Login;
