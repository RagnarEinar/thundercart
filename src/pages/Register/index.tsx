import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  registerRequest,
  RegisterState,
  resetRegister,
} from "../../data/slices/register";
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
  SignUpButton,
  ButtonContainer,
  SignUpText,
  SignUpLink,
  Wrapper,
  RegisterForm,
} from "../Login/styled.components";
import { toast } from "react-toastify";

interface RegisterFormInputs {
  name: string;
  email: string;
  password: string;
  address: string; // Add address here
}

const Register: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>();

  const [hasError, setHasError] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { registeredUser, error, isRegistering } = useSelector<
    RootState,
    RegisterState
  >((s) => s.register);

  const onSubmit: SubmitHandler<RegisterFormInputs> = (data) => {
    setHasError(false);
    dispatch(registerRequest(data));
  };

  useEffect(() => {
    if (registeredUser && registeredUser.email !== "") {
      console.log("Registration successful! Redirecting...");
      toast.success("Registration successful ...");
      navigate("/login");
    } else if (error) {
      toast.dismiss();
      toast.error("Registration Failed. Please try again...");
      console.log("Registration Failed. Please try again.");
      setHasError(true);
    }

    return () => {
      dispatch(resetRegister());
    };
  }, [registeredUser, error, navigate, dispatch]);

  if (isRegistering) {
    return <Loader message="Registering" />;
  }

  return (
    <Wrapper>
      <Container $hasError={hasError}>
        <Title>Register</Title>
        <RegisterForm onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <Label htmlFor="name">Name : </Label>
            <Input
              type="text"
              id="name"
              placeholder="Name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">Email :</Label>
            <Input
              type="email"
              id="email"
              placeholder="sample@email.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <ErrorMessage>{errors.email.message}</ErrorMessage>
            )}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="password">Password :</Label>
            <Input
              type="password"
              id="password"
              placeholder="Password"
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

          {/* Address field */}
          <FormGroup>
            <Label htmlFor="address">Address :</Label>
            <Input
              type="text"
              id="address"
              placeholder="Address"
              {...register("address", { required: "Address is required" })}
            />
            {errors.address && (
              <ErrorMessage>{errors.address.message}</ErrorMessage>
            )}
          </FormGroup>

          <ButtonContainer>
            <SignUpButton type="submit">Register</SignUpButton>
            <SignUpText>
              Already have an account ?
              <SignUpLink onClick={() => navigate("/login")}>
                Login here
              </SignUpLink>
            </SignUpText>
          </ButtonContainer>
        </RegisterForm>
      </Container>
    </Wrapper>
  );
};

export default Register;
