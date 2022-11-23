import { render, screen } from "@testing-library/react";
import NotFound from "./NotFound";
import userEvent from "@testing-library/user-event";

describe("NotFound", () => {
  const mockedUsedNavigate = jest.fn();

  jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockedUsedNavigate,
  }));

  test("displays not found error message and navigate to other component", async () => {
    render(
      <NotFound
        errorMessage="GitHub user was not found"
        redirectFunction={() => mockedUsedNavigate("/")}
      />
    );
    expect(screen.getByText("GitHub user was not found")).toBeInTheDocument();
    await userEvent.click(screen.getByRole("button"));
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/");
  });
});
