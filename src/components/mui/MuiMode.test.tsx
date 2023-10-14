import { render, screen } from "../../test-utils";
import { MuiMode } from "./MuiMode";

describe("MuiMode", () => {
  test("render correctly", () => {
    render(<MuiMode />);
    const isheading = screen.getByRole("heading");
    expect(isheading).toHaveTextContent("dark mode");
  });
});
