import * as React from "react";
import { useQuery } from "react-query";

import styles from "./animeHomePage.module.css";

import { getAnimeList } from "../../../../data/sources/GetAnimeList";
import CardContainer from "../../../Common/components/CardContainer";
import Navbar from "../../../Common/components/Navbar";
import MainLayout from "../components/MainLayout";
import mapAnimeData from "../../../../data/mappers/mapAnimeData";

export default function AnimeHomePage(): React.ReactElement {
  const { data, isLoading } = useQuery("todos", getAnimeList, {
    staleTime: Infinity,
  });

  const animeList = data?.data.map((d: any) => mapAnimeData(d));

  return (
    <MainLayout>
      <>
        <Navbar />
        <div className={styles["anime-homepage__compartment"]}>
          {isLoading ? null : <CardContainer items={animeList} />}
        </div>
      </>
    </MainLayout>
  );
}
