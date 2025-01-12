import React from "react";
import { useTheme } from "./utils/theme/CustomThemeProvider";
import Navbar from "./components/Navbar";
import { styled } from "styled-components";
import { Outlet } from "react-router";

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;
`;

export const AppContentWrapper = styled.div`
  position: relative;
`;

const AppProvider: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
      <AppWrapper>
        <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <AppContentWrapper>
          <Outlet />
        </AppContentWrapper>
      </AppWrapper>
  );
};

export default AppProvider;
