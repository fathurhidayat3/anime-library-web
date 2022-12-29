import axios from "axios";

import constants from "../../utils/constants";

const getAnimeList = (keyword?: string, page: number = 1) => {
  return axios({
    method: "GET",
    url: `${constants.API_HOST}/anime?limit=9&page=${page}&q=${keyword}`,
  }).then((res) => res.data);
};

export { getAnimeList };
