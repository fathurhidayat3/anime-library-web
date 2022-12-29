import * as React from "react";

import styles from "./searchBox.module.css";

type Props = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export default function SearchBox(props: Props): React.ReactElement {
  const { onClick } = props;

  return (
    <div>
      <input
        type="text"
        placeholder="Search Anime..."
        className={styles["search-box__input-text"]}
      />
      <button onClick={onClick} className={styles["search-box__button"]}>
        Submit
      </button>
    </div>
  );
}
