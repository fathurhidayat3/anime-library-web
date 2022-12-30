import * as React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

import styles from "../AnimeDetailPage/animeDetailPage.module.css";
import mapAnimeData from "../../../../data/mappers/mapAnimeData";
import { getAnimeByID } from "../../../../data/sources/GetAnimeByID";
import Card from "../../../Common/components/Card";
import Navbar from "../../../Common/components/Navbar";
import MainLayout from "../components/MainLayout";
import Loader from "../../../Common/components/Loader";

export default function AnimeDetailPage(): React.ReactElement {
  const { id = "1" } = useParams();

  const { data, isLoading } = useQuery("animeByID", () => getAnimeByID(id), {
    staleTime: Infinity,
  });

  const anime = mapAnimeData(data?.data);

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
            />
          </div>
        )}
      </div>
    </MainLayout>
  );
}
