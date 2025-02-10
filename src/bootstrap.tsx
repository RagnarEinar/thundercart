import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import {
  CustomThemeProvider,
  ThemeProviderContext,
} from "./utils/theme/CustomThemeProvider";
import store from "./data/store";
import { GlobalStyle } from "./utils/theme/GlobalStyles";
import AppRoutes from "./Routes";
import ErrorBoundary from "./ErrorBoundary";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <ThemeProviderContext>
        <CustomThemeProvider>
          <GlobalStyle />
          <ErrorBoundary>
          <AppRoutes />
          </ErrorBoundary>
        </CustomThemeProvider>
      </ThemeProviderContext>
    </Provider>
  // </React.StrictMode>
);
