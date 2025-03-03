import React, { useEffect } from "react";
import { useTheme } from "./utils/theme/CustomThemeProvider";
import Navbar from "./components/Navbar";
import { styled } from "styled-components";
import { Outlet } from "react-router";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./data/slices/products";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;
`;

export const AppContentWrapper = styled.div`
  position: relative;
  font-family: Arial, sans-serif;
`;

export const CustomToastContainer = styled(ToastContainer)`
  .Toastify__toast {
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    padding: 0rem 1rem;
    height: 10px;
    font-size: 1rem;
    color: ${({ theme }) => theme.color};
  }

  .Toastify__toast--success {
    color: rgba(0, 158, 26, 0.96);
  }

  .Toastify__toast--error {
    color: rgba(253, 5, 5, 0.96);
  }

  .Toastify__close-button {
    color: #010101;
    opacity: 1;
    opacity: 0.7;
    &:hover {
      transform: scale(1.05);
    }
  }
  .Toastify__toast--success .Toastify__toast-icon,
  .Toastify__toast--error .Toastify__toast-icon {
    width: 14px;
    height: 14px;
  }
`;

const AppProvider: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <AppWrapper>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <AppContentWrapper>
        <CustomToastContainer
          position="top-center"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeButton={true}
          rtl={false}
        />
        <Outlet />
      </AppContentWrapper>
    </AppWrapper>
  );
};

export default AppProvider;
