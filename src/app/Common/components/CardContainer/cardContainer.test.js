import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import CardContainer from "./index";

const subtitle = {
  type: "Film",
  year: 2010,
  status: "Finished",
  totalEpisode: 20,
};

const content = {
  synopsis: "Lorem Ipsum",
  genres: [
    { id: "1", name: "Action" },
    { id: "2", name: "Sci-Fi" },
  ],
  themes: [
    { id: "1", name: "Lorem" },
    { id: "2", name: "Ipsum" },
  ],
};

const cardContent = {
  title: "Adventure",
  thumbnailSrc: "/image.jpg",
  to: "/",
  subtitle,
  content,
};

it("Render Card Container", async () => {
  render(
    <CardContainer
      items={[...Array(5)].map((item, index) => ({
        id: index,
        ...cardContent,
      }))}
    />,
    { wrapper: MemoryRouter }
  );

  // Should have same length of Card items
  const items = await screen.findAllByText("Adventure");
  expect(items).toHaveLength(5);
});
