import { render, screen } from "@testing-library/react";
import { Loading } from "./Loading";

describe("Loading", () => {
  test("renders back button", () => {
    render(<Loading />);
    const spinner = screen.getByRole("alert");
    expect(spinner.className).toBe("loader");
  });
});
