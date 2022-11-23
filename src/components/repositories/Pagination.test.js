import { render, screen } from "@testing-library/react";
import Pagination from "./Pagination";
import userEvent from "@testing-library/user-event";

describe("Pagination", () => {
  test("check if it not rendering more pages than it is supposed to", () => {
    render(
      <Pagination
        currentPage={1}
        postsPerPage={3}
        totalPosts={9}
        paginate={(pageNumber) => () => {}}
      />
    );
    const page = screen.queryByText("4");
    expect(page).not.toBeInTheDocument();
  });
  test("check if current page has the selected class", () => {
    render(
      <Pagination
        currentPage={1}
        postsPerPage={3}
        totalPosts={9}
        paginate={(pageNumber) => () => {}}
      />
    );
    const page = screen.queryByText("1");
    expect(page.className).toBe("page-link page-item-selected");
  });
  test("check if left arrow is not appearing if selected page is the first one", () => {
    render(
      <Pagination
        currentPage={1}
        postsPerPage={3}
        totalPosts={9}
        paginate={(pageNumber) => () => {}}
      />
    );
    expect(screen.queryByTestId("left-arrow")).not.toBeInTheDocument();
  });

  test("check if right arrow is not appearing if selected page is the last one", () => {
    render(
      <Pagination
        currentPage={3}
        postsPerPage={3}
        totalPosts={9}
        paginate={(pageNumber) => () => {}}
      />
    );
    expect(screen.queryByTestId("right-arrow")).not.toBeInTheDocument();
  });

  test("check if next page is returning the right value", async () => {
    const dispatcherMock = jest.fn();
    render(
      <Pagination
        currentPage={1}
        postsPerPage={3}
        totalPosts={9}
        paginate={dispatcherMock}
      />
    );
    await userEvent.click(screen.getByTestId("right-arrow"));
    expect(dispatcherMock).toHaveBeenCalledWith(2);
  });

  test("check if previous page is returning the right value", async () => {
    const dispatcherMock = jest.fn();
    render(
      <Pagination
        currentPage={2}
        postsPerPage={3}
        totalPosts={9}
        paginate={dispatcherMock}
      />
    );
    await userEvent.click(screen.getByTestId("left-arrow"));
    expect(dispatcherMock).toHaveBeenCalledWith(1);
  });
});
