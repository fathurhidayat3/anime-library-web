import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Card from "./index";

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

it("Render Card", async () => {
  render(
    <Card
      title="Adventure"
      thumbnailSrc="/image.jpg"
      to="/"
      subtitle={subtitle}
      content={content}
    />,
    { wrapper: MemoryRouter }
  );

  // Should contains correct text
  expect(screen.getByText("Adventure")).toBeInTheDocument();
  expect(screen.getByText("Lorem Ipsum")).toBeInTheDocument();

  // Should have correct alt attribute
  expect(screen.getByAltText("Adventure")).toBeInTheDocument();

  // Should be able to click title
  fireEvent.click(screen.getByText("Adventure"));
});
