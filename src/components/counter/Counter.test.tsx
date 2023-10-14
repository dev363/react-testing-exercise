import { render, screen, act, logRoles } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Counter } from "./Counter";

describe("Counter", () => {
  test("Counter render correctly", () => {
    render(<Counter />);
    const isCounter = screen.getByRole("heading", { level: 1 });
    expect(isCounter).toBeInTheDocument();
    const isButton = screen.getByRole("button", { name: "Increment" });
    expect(isButton).toBeInTheDocument();
  });
  test("render a count of 0", () => {
    render(<Counter />);
    const isValue = screen.getByRole("heading", { level: 1 });
    expect(isValue).toHaveTextContent("0");
  });
  test("render counter after click increment button", async () => {
    userEvent.setup();
    render(<Counter />);
    const isButton = screen.getByRole("button", { name: "Increment" });
    await act(async () => {
      await userEvent.click(isButton);
    });
    // await act(async () => {
    //   await userEvent.click(isButton); // For 2 time click
    // });
    const isValue = screen.getByRole("heading", { level: 1 });
    expect(isValue).toHaveTextContent("1");
  });
  test("render count 10 after click on button", async () => {
    userEvent.setup();
    render(<Counter />);
    const inputElement = screen.getByRole("spinbutton");
    await act(async () => {
      await userEvent.type(inputElement, "10");
    });
    expect(inputElement).toHaveValue(10);
    const setButton = screen.getByRole("button", { name: "Set" });
    await act(async () => {
      await userEvent.click(setButton);
    });
    const isCounter = screen.getByRole("heading", { level: 1 });
    expect(isCounter).toHaveTextContent("10");
  });

  test("element to be focus in right order", async () => {
    userEvent.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    const inputElement = screen.getByRole("spinbutton");
    const settButton = screen.getByRole("button", { name: "Set" });
    userEvent.tab();
    expect(incrementButton).toHaveFocus();
    userEvent.tab();
    expect(inputElement).toHaveFocus();
    userEvent.tab();
    expect(settButton).toHaveFocus();
  });

  test.only("check upload file", async () => {
    userEvent.setup();
    render(<Counter />);

    const file = new File(["hello"], "hello.png", { type: "image/png" });

    const input = screen.getByLabelText(/upload file/i);

    await act(async () => {
      await userEvent.upload(input, file);
    });

    expect(input.files[0]).toStrictEqual(file);
    expect(input.files.item(0)).toStrictEqual(file);
    expect(input.files).toHaveLength(1);
  });
});
//
