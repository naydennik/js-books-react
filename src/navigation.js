import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/landing";
import AboutPage from "./pages/about";
import ErrorPage from "./pages/error";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/about" component={AboutPage} />
        <Route component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Navigation;
