import axios from "axios";

const getAnimeList = () => {
  return axios({ method: "GET", url: "https://api.jikan.moe/v4/anime" }).then(
    (res) => res.data
  );
};

export { getAnimeList };
