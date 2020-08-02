import React from "react";
import styles from "./index.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="row text-center">
        <div className="col-lg-12">
          <p>
            Made by
            <a href="https://www.facebook.com/naydennik" rel="nofollow">
              Nayden Nikolov
            </a>
            . Contact him at
            <a href="mailto:naydennik@gmail.com?">naydennik@gmail.com</a>.
          </p>
          <p>
            Based on
            <a href="https://getbootstrap.com" rel="nofollow">
              Bootstrap
            </a>
            . Icons from
            <a
              href="https://fortawesome.github.io/Font-Awesome/"
              rel="nofollow"
            >
              Font Awesome
            </a>
            . Web fonts from
            <a href="https://www.google.com/webfonts" rel="nofollow">
              Google
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
