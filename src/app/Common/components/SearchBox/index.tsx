import * as React from "react";

import styles from "./searchBox.module.css";

type Props = {
  keyword: string;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | any;
};

export default function SearchBox(props: Props): React.ReactElement {
  const { keyword, setKeyword, onClick } = props;

  return (
    <div>
      <input
        type="text"
        placeholder="Search Anime..."
        value={keyword}
        className={styles["search-box__input-text"]}
        onChange={(e) => setKeyword(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onClick && onClick(e);
          }
        }}
      />
      <button onClick={onClick} className={styles["search-box__button"]}>
        Submit
      </button>
    </div>
  );
}
