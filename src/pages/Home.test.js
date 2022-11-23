import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "./Home";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Home", () => {
  it("check if error is shown when we press go and input is empty", async () => {
    render(<Home />);
    await userEvent.click(screen.getByRole("button"));
    expect(
      screen.getByText("please enter the user you want to check")
    ).toBeInTheDocument();
  });

  test("displays not found error message and navigate to other component", async () => {
    render(<Home />);
    const userInput = screen.getByRole("textbox");
    fireEvent.change(userInput, { target: { value: "TestName" } });
    await userEvent.click(screen.getByRole("button"));
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/TestName");
  });
});
