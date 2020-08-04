import React from "react";
import styles from "./index.module.css";
import Header from "../../components/header";
import Footer from "../../components/footer";

const AboutPage = () => {
  return (
    <div>
      <Header />
      <div className={styles}>
        <div className="container py-5">
          <div className="row h-100 align-items-center py-5">
            <div className="col-lg-6">
              <h1 className="display-4">About us page</h1>
              <div className="lead text-muted mb-0">
                <p>
                  Welcome to Nayden Nikolov's app for JavaScript books, your
                  number one source for all things connected to JS :).
                </p>
                <p>
                  I'm dedicated to providing you the very best of experience.
                </p>
                <p>
                  Created in 2020 the app has come a long way and there are
                  plenty of things to do more.
                </p>
                <p>
                  I hope you enjoy my product as much as I enjoyed creating it.
                </p>
                <p>
                  If you have any questions or comments, please don't hesitate
                  to contact us.
                </p>

                <p>Sincerely, Nayden Nikolov</p>
              </div>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <img
                src="https://res.cloudinary.com/mhmd/image/upload/v1556834136/illus_kftyh4.png"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
