import * as React from "react";
import { useQuery } from "react-query";

import { getAnimeList } from "../../../../data/sources/GetAnimeList";
import mapAnimeData from "../../../../data/mappers/mapAnimeData";

export default function AnimeHomePage(): React.ReactElement {
  const { data, isLoading } = useQuery("todos", getAnimeList, {
    staleTime: Infinity,
  });

  const animeList = data?.data.map((d: any) => mapAnimeData(d));

  return <>{JSON.stringify(animeList)}</>;
}
