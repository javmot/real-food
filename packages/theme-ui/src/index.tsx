import React from "react";
import ReactDOM from "react-dom";
import StyleGuide from "./styleguide/index";
import ThemeProvider from "./ThemeProvider";
import * as serviceWorker from "./serviceWorker";
import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: [
      "Calistoga&display=swap:300,400,700",
      "Lato:ital,wght@0,300;0,400;1,300;1,400&display=swap",
    ],
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <StyleGuide />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
