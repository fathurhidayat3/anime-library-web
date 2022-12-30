import { render, screen } from "@testing-library/react";

import Badge from "./index";

it("Render Badge", async () => {
  render(<Badge name="Adventure" />);

  // Should contains correct name text
  expect(screen.getByText("Adventure")).toBeInTheDocument();
});
