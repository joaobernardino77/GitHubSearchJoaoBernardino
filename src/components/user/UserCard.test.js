import { render, screen } from "@testing-library/react";
import UserCard from "./UserCard";

describe("User Card", () => {
  it("check if all props passed to User card are appearing", () => {
    render(
      <UserCard
        avatar="avatar_url"
        name="user_name"
        reposNumber="0"
        url="https://example.com"
      />
    );
    expect(screen.queryByTestId("usercard_name").getAttribute("href")).toBe(
      "https://example.com"
    );
    expect(screen.queryByTestId("usercard_avatar").getAttribute("src")).toBe(
      "avatar_url"
    );
    expect(screen.getByText("@user_name")).toBeInTheDocument();
    expect(screen.getByText("Number of Repositories : 0")).toBeInTheDocument();
  });
});
