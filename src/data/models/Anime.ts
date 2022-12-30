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

export type CardContent = {
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
