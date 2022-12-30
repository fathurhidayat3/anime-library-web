import * as React from "react";
import { useInfiniteQuery } from "react-query";
import ReactLoading from "react-loading";
import { useInView } from "react-intersection-observer";

import styles from "./animeHomePage.module.css";
import { getAnimeList } from "../../../../data/sources/GetAnimeList";
import CardContainer from "../../../Common/components/CardContainer";
import Navbar from "../../../Common/components/Navbar";
import MainLayout from "../components/MainLayout";
import mapAnimeData, { Anime } from "../../../../data/mappers/mapAnimeData";

export default function AnimeHomePage(): React.ReactElement {
  const [keyword, setKeyword] = React.useState("");

  const { data, isLoading, hasNextPage, fetchNextPage, refetch } =
    useInfiniteQuery(
      "animeList",
      ({ pageParam = 1 }) => getAnimeList(keyword, pageParam),
      {
        getNextPageParam: (lastPage, allPages) => {
          const nextPage = allPages.length + 1;
          return nextPage;
        },
      }
    );

  const { ref, inView } = useInView({
    threshold: 0,
  });

  React.useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  return (
    <MainLayout>
      <>
        <Navbar keyword={keyword} setKeyword={setKeyword} onClick={refetch} />
        <div className={styles["anime-homepage__compartment"]}>
          {isLoading ? (
            <div ref={ref} className={styles["anime-homepage__loading"]}>
              <ReactLoading type="bubbles" color="#4f74c8" />
            </div>
          ) : (
            data?.pages.map((page) => (
              <CardContainer
                items={page.data.map((d: Anime) => mapAnimeData(d))}
              />
            ))
          )}
        </div>
        <div ref={ref} className={styles["anime-homepage__loading"]}>
          <ReactLoading type="bubbles" color="#4f74c8" />
        </div>
      </>
    </MainLayout>
  );
}
