import { render, screen } from "@testing-library/react";
import Spotlight from "../Components/Spotlight";
import "@testing-library/jest-dom";

describe("Spotlight", () => {
  it("renders a heading", () => {
    render(<Spotlight />);

    const heading = screen.getByRole("heading", {
      name: /Piece of the Day/i,
    });
    expect(heading).toBeInTheDocument();
  });
});
