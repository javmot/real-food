import React from "react";
import { ThemeProvider } from "theme-ui";
import { theme } from "@real-food/theme-ui";

export default ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
