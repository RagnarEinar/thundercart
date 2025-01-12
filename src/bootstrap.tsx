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

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProviderContext>
        <CustomThemeProvider>
          <GlobalStyle />
          <AppRoutes />
        </CustomThemeProvider>
      </ThemeProviderContext>
    </Provider>
  </React.StrictMode>
);
