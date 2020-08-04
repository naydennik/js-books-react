import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/landing";
import AboutPage from "./pages/about";
import ErrorPage from "./pages/error";
import BooksPage from "./pages/books";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import CreatePage from "./pages/create";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/books" component={BooksPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/create" component={CreatePage} />
        <Route component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Navigation;
