import { logRoles, render, screen } from "@testing-library/react";
import { server } from "../../mocks/server";
import { rest } from "msw";
import UsersListing from "./UsersListing";

describe("Users Listing", () => {
  test("render correctly", () => {
    render(<UsersListing />);
    const isHeading = screen.getByRole("heading");
    expect(isHeading).toHaveTextContent("Users");
  });

  test("Success:render user listing", async () => {
    render(<UsersListing />);
    const userlisting = await screen.findAllByRole("paragraph");
    expect(userlisting.length).toBe(3);
    const isPost = screen.getByText("Post 2");
    expect(isPost).toBeInTheDocument();
  });

  test("Error:render user listing", async () => {
    server.use(
      rest.get(
        "https://jsonplaceholder.typicode.com/posts",
        (req, res, ctx) => {
          return res(ctx.status(500));
        }
      )
    );
    render(<UsersListing />);
    const isError = await screen.findByTestId("errorid");
    expect(isError).toBeInTheDocument();
  });
});
