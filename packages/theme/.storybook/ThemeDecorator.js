import React from "react";
import { ThemeProvider, pastelTheme } from "../src/index";

const ThemeDecorator = (storyFn) => (
  <ThemeProvider theme={pastelTheme}>{storyFn()}</ThemeProvider>
);

export default ThemeDecorator;
