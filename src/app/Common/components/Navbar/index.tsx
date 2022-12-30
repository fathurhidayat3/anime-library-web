import * as React from "react";

import styles from "./navbar.module.css";
import SearchBox from "../SearchBox";
import { Link, useNavigate } from "react-router-dom";
import { RoutePaths } from "../../../router";

export default function Navbar(props: any): React.ReactElement {
  const { keyword, setKeyword, onClick } = props;

  const navigate = useNavigate();

  const handleClickLogo = () => {
    window?.scrollTo(0, 0);
    navigate(RoutePaths.HOME);
  };

  return (
    <div className={styles["navbar"]}>
      <div>
        <h3 onClick={handleClickLogo}>Anime Library</h3>
        <SearchBox
          keyword={keyword}
          setKeyword={setKeyword}
          onClick={onClick}
        />
      </div>
    </div>
  );
}
