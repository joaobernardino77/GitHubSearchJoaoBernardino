import { render, screen } from "@testing-library/react";
import Repository from "./Repository";

describe("Repository", () => {
  it("check if all props passed to repository are appearing", () => {
    render(
      <Repository
        name="rep_name"
        description="description"
        url="https://example.com"
      />
    );
    expect(screen.queryByTestId("repository-item").getAttribute("href")).toBe(
      "https://example.com"
    );
    expect(screen.getByText("rep_name")).toBeInTheDocument();
    expect(screen.getByText("description")).toBeInTheDocument();
  });
});
