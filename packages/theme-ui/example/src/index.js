/** @jsx jsx */
import { jsx, Grid, Styled, Box } from "theme-ui";
import React from "react";
import ReactDOM from "react-dom";
import WebFont from "webfontloader";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ThemeProvider from "./ThemeProvider";
import Sidebar from "./sidebar";
import Base from "./base";
import Forms from "./forms";

const StyleGuide = () => (
  <Router>
    <Grid
      gap={2}
      px={2}
      pt={2}
      pb={8}
      columns={["auto 1fr", "100px 1fr", "200px 1fr"]}
    >
      <Sidebar paths={["/", "/forms"]} />
      <Box>
        <Switch>
          <Route exact path="/">
            <Styled.h1>Base Styles</Styled.h1>
            <Base />
          </Route>
          <Route path="/forms">
            <Styled.h1>Form Styles</Styled.h1>
            <Forms />
          </Route>
        </Switch>
      </Box>
    </Grid>
  </Router>
);

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
