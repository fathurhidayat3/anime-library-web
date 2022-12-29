import * as React from "react";
import { Link } from "react-router-dom";

import styles from "./card.module.css";
import Thumbnail from "../Thumbnail";
import Badge from "../Badge";
import { generateSubtitle } from "./utils";
import { Anime, Genre, Theme } from "../../../../data/mappers/mapAnimeData";

export type Props = Anime & { to: string };

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
            {genres.length > 0 ? (
              genres.map((genre: Genre) => (
                <div key={genre.name}>
                  <Badge name={genre.name} />
                </div>
              ))
            ) : (
              <div>
                <span>No Genre Data</span>
              </div>
            )}
          </div>
        </div>
        <div className={styles["card__footer-info"]}>
          <div>
            <span>Studio: {studio}</span>
          </div>
          <div className={styles["card__badge-container"]}>
            {themes.length > 0 ? (
              themes.map((theme: Theme) => (
                <div key={theme.name}>
                  <Badge name={theme.name} />
                </div>
              ))
            ) : (
              <div>
                <span>No Themes Data</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
