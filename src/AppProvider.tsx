import React, { useEffect } from "react";
import { useTheme } from "./utils/theme/CustomThemeProvider";
import Navbar from "./components/Navbar";
import { styled } from "styled-components";
import { Outlet } from "react-router";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./data/slices/products";
import { ToastContainer } from "react-toastify";

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

const AppProvider: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <AppWrapper>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <AppContentWrapper>
        <ToastContainer />
        <Outlet />
      </AppContentWrapper>
    </AppWrapper>
  );
};

export default AppProvider;
