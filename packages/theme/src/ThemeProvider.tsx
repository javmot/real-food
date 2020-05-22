import React from "react";
import { ThemeProvider, ThemeProviderProps, Theme } from "theme-ui";

export default ({ children, theme }: ThemeProviderProps<Theme>) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
