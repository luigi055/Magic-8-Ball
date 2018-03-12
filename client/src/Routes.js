import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import SelectLanguage from "./containers/SelectLanguage/SelectLanguage";
import Header from "./containers/Header/Header";

const Routes = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={SelectLanguage} />
        <Route exact path="/about" component={props => <div> About </div>} />
        <Route exact render={() => <h1> 404 - Not Found: ( </h1>} />
      </Switch>
    </div>
  </Router>
);

export default Routes;
