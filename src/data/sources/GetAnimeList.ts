import axios from "axios";

import constants from "../../utils/constants";

const getAnimeList = async (keyword: string, pageParam: number) => {
  return axios({
    method: "GET",
    url: `${constants.API_HOST}/anime?limit=9&page=${pageParam}&q=${keyword}`,
  }).then((res) => res.data);
};

export { getAnimeList };
