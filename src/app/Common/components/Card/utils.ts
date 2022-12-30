import { Subtitle } from "../../../../data/models/Anime";

export function generateSubtitle(subtitle: Subtitle): string {
  const { type, year, status, totalEpisode } = subtitle;

  return `${type}${year ? `, ${year} ` : " "}| ${status} | ${totalEpisode} eps`;
}
