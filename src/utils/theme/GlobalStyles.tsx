import { createGlobalStyle } from "styled-components";
// interface CustomTheme {
//   background: string;
//   color: string;
// }

const lightTheme = {
  background: "rgba(255, 255, 255, 1)", // Pure white
  color: "rgba(0, 0, 0, 0.87)", // Dark text
  hoverBackground: "rgba(224, 224, 224, 1)", // Light grey on hover
  cartIconColor: "rgba(51, 51, 51, 1)", // Dark cart icon
  badgeBackground: "rgba(255, 165, 0, 1)", // Orange badge
  badgeColor: "rgba(255, 255, 255, 1)", // White text on badge
  lightBoxShadow: "rgba(0, 0, 0, 0.05)", // Subtle light shadow
  mediumBoxShadow: "rgba(0, 0, 0, 0.15)", // Slightly stronger shadow
  heavyBoxShadow: "rgba(0, 0, 0, 0.25)", // Prominent shadow
  sidebarBackground: "rgba(248, 248, 248, 0.95)", // Light grey for sidebar background
  cartListBackground: "rgba(235, 235, 235, 1)", // Slightly darker background for cart list
};

const darkTheme = {
  background: "rgba(18, 18, 18, 1)", // Near-black
  color: "rgba(255, 255, 255, 0.97)", // Light text
  hoverBackground: "rgba(51, 51, 51, 1)", // Dark grey on hover
  cartIconColor: "rgba(249, 249, 249, 1)", // Light cart icon
  badgeBackground: "rgba(93, 153, 198, 1)", // Softer light blue for badges
  badgeColor: "rgba(0, 0, 0, 1)", // Black text on badge
  lightBoxShadow: "rgba(255, 255, 255, 0.05)", // Subtle light shadow for dark theme
  mediumBoxShadow: "rgba(255, 255, 255, 0.12)", // Moderate light shadow
  heavyBoxShadow: "rgba(255, 255, 255, 0.2)", // Strong light shadow
  sidebarBackground: "rgba(21, 18, 18, 0.94)", // Slightly darker for sidebar in dark theme
  cartListBackground: "rgba(30, 30, 30, 1)", // Darker background for cart list
};


const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    transition: background-color 0.5s, color 0.5s;
    margin: 0;
    padding: 0;
    box-sizing:border-box;
  },
  * {
    margin: 0;
    padding: 0;
  },

  *, *::before, *::after {
    box-sizing: inherit;
  }
`;
export { lightTheme, darkTheme, GlobalStyle };
