import * as React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

import styles from "../AnimeDetailPage/animeDetailPage.module.css";
import mapAnimeDetailData from "../../../../data/mappers/mapAnimeDetailData";
import { getAnimeByID } from "../../../../data/sources/GetAnimeByID";
import Card from "../../../Common/components/Card";
import Navbar from "../../../Common/components/Navbar";
import MainLayout from "../components/MainLayout";
import Loader from "../../../Common/components/Loader";

export default function AnimeDetailPage(): React.ReactElement {
  const params = useParams();
  const { id } = params;

  const { data, isLoading } = useQuery(
    "animeByID",
    () => getAnimeByID(id || "1"),
    {
      staleTime: id ? undefined : Infinity,
    }
  );

  const anime = mapAnimeDetailData(data?.data);

  return (
    <MainLayout>
      <div className={styles["anime-detail-page__container"]}>
        <Navbar />
        {isLoading ? (
          <Loader />
        ) : (
          <div className={styles["anime-detail-page__compartment"]}>
            <Card
              id={anime.id}
              thumbnailSrc={anime.thumbnailSrc}
              to={`/detail/${anime.id}`}
              title={anime.title}
              subtitle={anime.subtitle}
              content={anime.content}
              hideInfo
            />
            <div className={styles["anime-detail-page__info-container"]}>
              <div className={styles["anime-detail-page__info-box"]}>
                <h3>Trailer</h3>
                <hr />
                <div>
                  <iframe
                    title="Trailer"
                    width="320"
                    height="240"
                    src={`https://www.youtube.com/embed/${anime.youtubeTrailerID}`}
                  ></iframe>
                </div>
              </div>
              <div className={styles["anime-detail-page__info-box"]}>
                <h3>Synopsis</h3>
                <hr />
                {anime.content.synopsis}
              </div>
              <div className={styles["anime-detail-page__info-box"]}>
                <h3>Background</h3>
                <hr />
                {anime.content.background}
              </div>
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
}
