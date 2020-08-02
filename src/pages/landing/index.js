import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <div className="jumbotron">
        <h1 className="display-3">Hello, JavaScript!</h1>
        <p className="lead">This is a simple app for JavaScript books.</p>
        <hr className="my-4" />
        <p>If you want to look at the collection please login!</p>
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="/login" role="button">
            Login
          </a>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
