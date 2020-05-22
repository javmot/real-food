import React from "react";
import { ThemeProvider, ThemeProviderProps } from "theme-ui";
import { Theme } from "./interfaces";

export default ({ children, theme }: ThemeProviderProps<Theme>) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
