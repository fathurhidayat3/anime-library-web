import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import SearchBox from "./index";

it("Render SearchBox", async () => {
  const handleClick = jest.fn();

  render(
    <SearchBox keyword="hello" setKeyword={() => {}} onClick={handleClick} />,
    { wrapper: MemoryRouter }
  );

  // Should have "hello" in the input value
  screen.getByDisplayValue("hello");

  const inputNode = screen.getByPlaceholderText("Search Anime...");
  fireEvent.focus(inputNode);
  // Should be able to change input value
  fireEvent.change(inputNode, { target: { value: "Dragon Ball" } });
  // Should be able to click submit button
  fireEvent.click(screen.getByText("Submit"));

  // Should only trigger submit once
  expect(handleClick).toHaveBeenCalledTimes(1);
});
