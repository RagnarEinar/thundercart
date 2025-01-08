import { createContext, useContext, useState, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./GlobalStyles";

export interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: false,
  toggleTheme: () => {},
});

export const ThemeProviderContext = ({ children }: { children: ReactNode }) => {
  let initialTheme = false;

  try {
    const storedTheme = localStorage.getItem("theme");
    initialTheme = storedTheme === "dark";
  } catch (e) {
    console.error("Error accessing localStorage:", e);
  }

  const [isDarkMode, setIsDarkMode] = useState<boolean>(initialTheme);

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const newTheme = !prev;
      try {
        localStorage.setItem("theme", newTheme ? "dark" : "light");
      } catch (e) {
        console.error("Error saving to localStorage:", e);
      }
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const CustomThemeProvider = ({ children }: { children: ReactNode }) => {
  const { isDarkMode } = useTheme();
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  );
};
