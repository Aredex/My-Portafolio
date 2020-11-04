import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingScreen from "../screens/LandingScreen";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <LandingScreen />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
