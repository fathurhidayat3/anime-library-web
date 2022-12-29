import * as React from "react";
import { Link } from "react-router-dom";

import styles from "./card.module.css";
import { Genre, Props, Theme } from "./types";
import Thumbnail from "../Thumbnail";
import Badge from "../Badge";
import { generateSubtitle } from "./utils";

export default function Card(props: Props): React.ReactElement {
  const { title, subtitle, thumbnailSrc, to, content } = props;

  const { synopsis, score, genres, studio, themes } = content;

  return (
    <div className={styles["card"]}>
      <div className={styles["card__header"]}>
        <Link to={to}>{title}</Link>
        <span className={styles["card__subtitle"]}>
          {generateSubtitle(subtitle)}
        </span>
      </div>
      <div className={styles["card__content"]}>
        <div>
          <Link to={to}>
            <Thumbnail src={thumbnailSrc} alt={title} />
          </Link>
        </div>
        <div className={styles["card__detail"]}>
          <div className={styles["card__synopsis"]}>
            <span>{synopsis}</span>
          </div>
        </div>
      </div>
      <div className={styles["card__footer"]}>
        <div className={styles["card__footer-info"]}>
          <div>
            <span>Score: {score}</span>
          </div>
          <div className={styles["card__badge-container"]}>
            {genres.map((genre: Genre) => (
              <div key={genre.name}>
                <Badge name={genre.name} />
              </div>
            ))}
          </div>
        </div>
        <div className={styles["card__footer-info"]}>
          <div>
            <span>Studio: {studio}</span>
          </div>
          <div className={styles["card__badge-container"]}>
            {themes.map((theme: Theme) => (
              <div key={theme.name}>
                <Badge name={theme.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}