import React from "react";
import { useTheme } from "./utils/theme/CustomThemeProvider";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import { styled } from "styled-components";
import { Outlet } from "react-router";

export const AppWrapper = styled.div``;
export const ContentWrapper = styled.div`
  flex-grow: 1;
  padding: 20px;
`;

const AppProvider: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <AppWrapper>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <ContentWrapper>
        <Outlet />
        <ToastContainer />
      </ContentWrapper>
    </AppWrapper>
  );
};

export default AppProvider;
