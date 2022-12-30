export type Genre = {
  id: string;
  name: string;
};

export type Theme = Genre;

export type Subtitle = {
  type: string;
  year: number;
  status: string;
  totalEpisode: number;
};

type CardContent = {
  synopsis: string;
  score: number;
  genres: Genre[];
  studio: string;
  themes: Theme[];
};

export type Anime = {
  id: string;
  title: string;
  subtitle: Subtitle;
  thumbnailSrc: string;
  content: CardContent;
};

export default function mapAnimeData(data: any): Anime {
  return {
    id: data?.mal_id,
    title: data?.title,
    thumbnailSrc: data?.images?.jpg.image_url,
    subtitle: {
      type: data?.type,
      year: data?.year,
      status: data?.status,
      totalEpisode: data?.episodes,
    },
    content: {
      score: data?.score || "-",
      synopsis: data?.synopsis,
      studio: data?.studios?.[0] ? data.studios?.[0].name : "-",
      genres: data?.genres,
      themes: data?.themes,
    },
  };
}
