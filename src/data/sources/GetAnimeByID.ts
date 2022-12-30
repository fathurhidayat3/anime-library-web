import axios from "axios";

import constants from "../../utils/constants";

const getAnimeByID = (id: string) => {
  return axios({
    method: "GET",
    url: `${constants.API_HOST}/anime/${id}`,
  }).then((res) => res.data);
};

export { getAnimeByID };
