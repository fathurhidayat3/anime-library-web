import * as React from "react";

import styles from "./navbar.module.css";
import SearchBox from "../SearchBox";

export default function Navbar(props: any): React.ReactElement {
  const { keyword, setKeyword, onClick } = props;

  return (
    <div className={styles["navbar"]}>
      <div>
        <h3>Anime Library</h3>
        <SearchBox
          keyword={keyword}
          setKeyword={setKeyword}
          onClick={onClick}
        />
      </div>
    </div>
  );
}
