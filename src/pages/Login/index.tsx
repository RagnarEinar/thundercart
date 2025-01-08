import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { LoginState, signInRequest } from "../../data/slices/login";
import { RootState } from "../../data/store";
import Loader from "../../components/Loader";
import { resetRegister } from "../../data/slices/register";

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

  useEffect(() => {
    if (userDetails && userDetails.email !== "") {
      toast.success("Signin Successful");
      if (userDetails.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/profile");
      }
    } else if (error !== null) {
      toast.error("Login Failed");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userDetails, error]);

  if (isLogging) {
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
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
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
            backgroundColor: "#007bff",
            color: "#fff",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
