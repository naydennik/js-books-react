import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "../pages/landing";
import AboutPage from "../pages/about";
import ErrorPage from "../pages/error";
import BooksPage from "../pages/books";
import LoginPage from "../pages/login";
import RegisterPage from "../pages/register";
import CreatePage from "../pages/create";
import ProtectedRoute from "./protected";
import DetailsPage from "../pages/details";
import EditPage from "../pages/edit";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/about" component={AboutPage} />
        <ProtectedRoute path="/details/:id" component={DetailsPage} />
        <ProtectedRoute path="/edit/:id" component={EditPage} />
        <ProtectedRoute path="/create" component={CreatePage} />
        <ProtectedRoute path="/books" component={BooksPage} />

        <Route component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Navigation;
