import { CardContent, Subtitle } from "../models/Anime";

type CardContentDetail = CardContent & { background: string };

export type Anime = {
  id: string;
  title: string;
  subtitle: Subtitle;
  thumbnailSrc: string;
  youtubeTrailerID: string;
  content: CardContentDetail;
};

export default function mapAnimeDetailData(data: any): Anime {
  return {
    id: data?.mal_id,
    title: data?.title,
    thumbnailSrc: data?.images?.jpg.image_url,
    youtubeTrailerID: data?.trailer.youtube_id,
    subtitle: {
      type: data?.type,
      year: data?.year,
      status: data?.status,
      totalEpisode: data?.episodes,
    },
    content: {
      score: data?.score || "-",
      synopsis: data?.synopsis || "-",
      studio: data?.studios?.[0] ? data.studios?.[0].name : "-",
      genres: data?.genres,
      themes: data?.themes,
      background: data?.background || "-",
    },
  };
}
