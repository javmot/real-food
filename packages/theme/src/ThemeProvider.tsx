import React from "react";
import { ThemeProvider } from "theme-ui";
import { IconContext } from "react-icons";
import { Theme } from "./interfaces";

interface ThemeProviderProps {
  children: React.ReactNode;
  theme: Theme;
}

export default ({ children, theme }: ThemeProviderProps) => (
  <ThemeProvider theme={theme}>
    <IconContext.Provider
      value={{
        className: "real-food-icons",
        style: { verticalAlign: "middle" },
      }}
    >
      {children}
    </IconContext.Provider>
  </ThemeProvider>
);
