/** @jsx jsx */
import { jsx, Grid, Styled, Box } from "theme-ui";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./sidebar";
import Base from "./base";
import Forms from "./forms";

export default () => (
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
