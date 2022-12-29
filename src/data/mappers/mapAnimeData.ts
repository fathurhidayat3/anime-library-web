export default function mapAnimeData(data: any): any {
  return {
    id: data.mal_id,
    title: data.title,
    thumbnailSrc: data.images.jpg.image_url,
    subtitle: {
      type: data.type,
      year: data.year,
      status: data.status,
      totalEpisode: data.episodes,
    },
    content: {
      score: data.score,
      synopsis: data.synopsis,
      studio: data.studios?.[0] ? data.studios?.[0].name : "-",
      genres: data.genres,
      themes: data.themes,
    },
  };
}
