import * as React from "react";
import ReactLoading from "react-loading";

import styles from "./loader.module.css";

export default function Loader() {
  return (
    <div className={styles["loader"]}>
      <div>
        <ReactLoading type="bubbles" color="#4f74c8" />
      </div>
    </div>
  );
}
