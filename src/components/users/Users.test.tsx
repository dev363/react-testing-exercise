import { render, screen } from "@testing-library/react";
import { Users } from "./Users";
import { server } from "../../mocks/server";
import { rest } from "msw";

describe("Users", () => {
  test("render correctly", () => {
    render(<Users />);
    const isHeading = screen.getByRole("heading");
    expect(isHeading).toHaveTextContent("Users");
  });
  test("User list item mock function", async () => {
    render(<Users />);
    const isListItems = await screen.findAllByRole("listitem");
    expect(isListItems).toHaveLength(3);
  });
  test("render api erros", async () => {
    server.use(
      rest.get(
        "https://jsonplaceholder.typicode.com/users",
        (req, res, ctx) => {
          return res(ctx.status(500));
        }
      )
    );
    render(<Users />);
    const isListItems = await screen.findByText("Error fetching users");
    expect(isListItems).toBeInTheDocument();
  });
});
