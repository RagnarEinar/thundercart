import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { registerRequest, RegisterState } from "../../data/slices/register";
import { RootState } from "../../data/store";
import Loader from "../../components/Loader";
import { useNavigate } from "react-router";
import {
  Container,
  Title,
  FormGroup,
  Label,
  Input,
  ErrorMessage,
  Form,
  SignUpButton,
  ButtonContainer,
  SignUpText,
  SignUpLink,
} from "../Login/styled.components";

interface RegisterFormInputs {
  name: string;
  email: string;
  password: string;
}

const Register: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>();

  const [isSubmitted, setIsSubmitted] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isRegistering, registeredUser, error } = useSelector<
    RootState,
    RegisterState
  >((s) => s.register);

  const onSubmit: SubmitHandler<RegisterFormInputs> = (data) => {
    setIsSubmitted(true);
    dispatch(registerRequest(data));
  };

  useEffect(() => {
    if (isSubmitted) {
      if (registeredUser && registeredUser.email !== "") {
        console.log("Registration successful! Redirecting...");
        navigate("/login");
      } else if (error !== null) {
        console.log("Registration Failed. Please try again.");
      }
    }
  }, [registeredUser, error, navigate, isSubmitted]);

  if (isRegistering) {
    return <Loader />;
  }

  return (
    <Container>
      <Title>Register</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label htmlFor="name">Name:</Label>
          <Input
            type="text"
            id="name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        </FormGroup>

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
          <SignUpButton type="submit">Register</SignUpButton>
          <SignUpText>
            Already have an account ?
            <SignUpLink onClick={() => navigate("/login")}>Login here</SignUpLink>
          </SignUpText>
        </ButtonContainer>
      </Form>
    </Container>
  );
};

export default Register;
