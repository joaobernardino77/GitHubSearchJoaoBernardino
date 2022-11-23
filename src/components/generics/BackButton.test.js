import { render, screen } from "@testing-library/react";
import { BackButton } from "./BackButton";
import userEvent from "@testing-library/user-event";

describe("BackButton", () => {
  test("renders back button", () => {
    render(<BackButton />);
    const button = screen.getByRole("button");
    expect(button.className).toBe("back-button");
  });

  const mockedUsedNavigate = jest.fn();
  jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockedUsedNavigate,
  }));

  test("has a button and does navigate to other component", async () => {
    render(<BackButton redirectFunction={() => mockedUsedNavigate("/")} />);
    await userEvent.click(screen.getByRole("button"));
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/");
  });
});
