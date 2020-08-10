import React from "react";
import styles from "./index.module.css";

const Spinner = () => {
  return (
    <div>
      <p className="spinner-border" id={styles.border} role="status" />
      <div id={styles.text}>Loading...</div>
      {/* <div
            className="spinner-grow"
            style="width: 3rem; height: 3rem;"
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div> */}
    </div>
  );
};

export default Spinner;
