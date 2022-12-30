import * as React from "react";
import { useInfiniteQuery, useQueryClient } from "react-query";
import { useInView } from "react-intersection-observer";

import styles from "./animeHomePage.module.css";
import { getAnimeList } from "../../../../data/sources/GetAnimeList";
import CardContainer from "../../../Common/components/CardContainer";
import Navbar from "../../../Common/components/Navbar";
import MainLayout from "../components/MainLayout";
import mapAnimeData from "../../../../data/mappers/mapAnimeData";
import Loader from "../../../Common/components/Loader";
import { Anime } from "../../../../data/models/Anime";

export default function AnimeHomePage(): React.ReactElement {
  const [keyword, setKeyword] = React.useState("");

  const queryClient = useQueryClient();
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const { data, isLoading, hasNextPage, fetchNextPage, refetch } =
    useInfiniteQuery(
      "animeList",
      ({ pageParam = 1 }) => getAnimeList(keyword, pageParam),
      {
        getNextPageParam: (lastPage, allPages) => {
          const nextPage = allPages.length + 1;
          return nextPage;
        },
        staleTime: Infinity,
      }
    );

  React.useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  const handleClickSearch = () => {
    queryClient.removeQueries("animeList");
    window?.scrollTo(0, 0);
    refetch();
  };

  return (
    <MainLayout>
      <>
        <Navbar
          keyword={keyword}
          setKeyword={setKeyword}
          onClick={handleClickSearch}
        />
        <div className={styles["anime-homepage__compartment"]}>
          {isLoading ? (
            <Loader />
          ) : (
            data?.pages.map((page, index) => (
              <CardContainer
                key={index}
                items={page.data.map((d: Anime) => mapAnimeData(d))}
              />
            ))
          )}
        </div>
        <div ref={ref}>
          <Loader />
        </div>
      </>
    </MainLayout>
  );
}
