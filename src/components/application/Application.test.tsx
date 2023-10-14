import { render, screen } from "@testing-library/react";
import { Application } from "./Application";

describe("Application", () => {
  it("Check Heading", () => {
    render(<Application />);
    const isTitle = screen.getByRole("heading", {
      name: "Job application form",
      level: 1,
    });
    expect(isTitle).toBeInTheDocument();
  });
  it("Check getByText", () => {
    render(<Application />);
    const isTitle = screen.getByText("All fields are mandatory");
    expect(isTitle).toBeInTheDocument();
  });
  describe("Check Elements", () => {
    test("Check Form", () => {
      render(<Application />);
      const isForm = screen.getByTestId("form-section");
      expect(isForm).toBeInTheDocument();
    });
    test("Check inputs", () => {
      render(<Application />);
      const isTextBox = screen.getAllByRole("textbox").length;
      expect(isTextBox).toEqual(2);

      const isNameText = screen.getByRole("textbox", {
        name: "Bio",
      });
      expect(isNameText).toBeInTheDocument();

      const isNameText2 = screen.getByLabelText("Bio", {
        selector: "textarea",
      });
      expect(isNameText2).toBeInTheDocument();

      const isNameDisplayValue = screen.getByDisplayValue("Satnam");
      expect(isNameDisplayValue).toBeInTheDocument();
    });
    test("Check select", () => {
      render(<Application />);
      const isSelect = screen.getByRole("combobox");
      expect(isSelect).toBeInTheDocument();
    });
    test("Check terms Checkbox", () => {
      render(<Application />);
      const isSelect = screen.getByRole("checkbox");
      expect(isSelect).toBeInTheDocument();

      const isCheckbox2 = screen.getByLabelText(
        "I agree to the terms and conditions",
      );
      expect(isCheckbox2).toBeInTheDocument();
    });
    test("Check Image", () => {
      render(<Application />);
      const isAlt = screen.getByAltText("a person with a laptop");
      expect(isAlt).toBeInTheDocument();
    });
    test("Check with getByTestId", () => {
      render(<Application />);
      const isTestId = screen.getByTestId("custom-element");
      expect(isTestId).toBeInTheDocument();
    });
    test("check button", () => {
      render(<Application />);
      const isButton = screen.getByRole("button");
      expect(isButton).toBeDisabled();
    });
  });
});
