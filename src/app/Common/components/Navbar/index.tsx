import * as React from "react";

import styles from "./navbar.module.css";
import SearchBox from "../SearchBox";

export default function Navbar() {
  const handleClickSearch = () => {};
  return (
    <div className={styles["navbar"]}>
      <div>
        <h3>Anime Library</h3>
        <SearchBox onClick={handleClickSearch} />
      </div>
    </div>
  );
}
