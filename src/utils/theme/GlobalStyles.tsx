import { createGlobalStyle, DefaultTheme } from "styled-components";

const lightTheme: DefaultTheme = {
  background: "rgba(255, 255, 255,1)",
  color: "rgba(1, 1, 1, 1)",
};

const darkTheme: DefaultTheme = {
  background: "rgba(1, 1, 1, 1)",
  color: "rgba(255, 255, 255,1)",
};

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    transition: background-color 0.5s, color 0.5s;
    margin:0;
    padding:0;
    box-sizing:border-box;
  },
`;
export { lightTheme, darkTheme, GlobalStyle };
