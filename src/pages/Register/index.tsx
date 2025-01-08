import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { registerRequest, RegisterState } from "../../data/slices/register";
import { RootState } from "../../data/store";
import Loader from "../../components/Loader";
import { useNavigate } from "react-router";

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
        toast.success("Registration Successful");
        navigate("/login");
      } else if (error !== null) {
        toast.error("Registration Failed");
      }
    }
  }, [registeredUser, error, navigate, isSubmitted]);

  if (isRegistering) {
    return <Loader />;
  }

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "0 auto",
        padding: "20px",
        border: "1px solid #ccc",
      }}
    >
      <h2>Register</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="email">Email:</label>
          <input
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
          {errors.email && (
            <p style={{ color: "red" }}>{errors.email.message}</p>
          )}
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="password">Password:</label>
          <input
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
            <p style={{ color: "red" }}>{errors.password.message}</p>
          )}
        </div>

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#28a745",
            color: "#fff",
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
