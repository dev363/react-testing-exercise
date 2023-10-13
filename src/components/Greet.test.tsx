import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

describe("Greet", () => {
  test("Render correctly", () => {
    render(<Greet />);
    const isHello = screen.getByText(/hello/i);
    expect(isHello).toBeInTheDocument();
  });

  describe("Props", () => {
    it("Render with Name Prop", () => {
      render(<Greet name={"Satnam"} />);
      const isName = screen.getByText("Hello Satnam");
      expect(isName).toBeInTheDocument();
    });
  });
});

//  describe("Props Test", () => {
//    test("Render with Name Prop", () => {
//      render(<Greet name={"Satnam"} />);
//      const isName = screen.getByText("Hello Satnam");
//      expect(isName).toBeInTheDocument();
//    });
//  });
//  text === it
// test.only == fit
// test.skip  == xit
