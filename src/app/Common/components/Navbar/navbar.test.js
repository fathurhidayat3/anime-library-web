import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Navbar from "./index";

it("Render Navbar", async () => {
  const handleClick = jest.fn();

  render(
    <Navbar keyword="hello" setKeyword={() => {}} onClick={handleClick} />,
    { wrapper: MemoryRouter }
  );

  // Should contains correct Navbar logo text
  expect(screen.getByText("Anime Library")).toBeInTheDocument();
  expect(screen.queryByText("Anime Database")).not.toBeInTheDocument();

  const inputNode = screen.getByPlaceholderText("Search Anime...");
  fireEvent.focus(inputNode);
  // Should be able to change input value
  fireEvent.change(inputNode, { target: { value: "One Piece" } });
  // Should be able to click submit button
  fireEvent.click(screen.getByText("Submit"));

  // Should only trigger submit once
  expect(handleClick).toHaveBeenCalledTimes(1);
});
