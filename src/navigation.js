import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/landing";
import AboutPage from "./pages/about";
import ErrorPage from "./pages/error";
import BooksPage from "./pages/books";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/books" component={BooksPage} />
        <Route path="/about" component={AboutPage} />
        <Route component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Navigation;
