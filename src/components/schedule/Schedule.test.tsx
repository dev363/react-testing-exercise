/* eslint-disable testing-library/no-render-in-setup */
import { act, render, screen, waitFor } from "@testing-library/react";
import fireEvent from "@testing-library/user-event";

import InputForm from "./InputForm";
import userEvent from "@testing-library/user-event";
let nameInput: any,
  checkInInput: any,
  checkOutInput: any,
  buttonElement: any,
  scheduleRow: any;

beforeAll(() => {
  render(<InputForm />);
  nameInput = screen.getByRole("textbox", {
    name: /name/i,
  });
  checkInInput = screen.getByLabelText(/check in/i);
  checkOutInput = screen.getByLabelText(/check out/i);
  buttonElement = screen.getByRole("button", { name: "Schedule" });
});

describe("Schedule List", () => {
  test("render correctly", () => {
    expect(nameInput).toBeInTheDocument();
    expect(checkInInput).toBeInTheDocument();
    expect(checkOutInput).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  test.only("List Schedules", async () => {
    userEvent.setup();
    await act(() => userEvent.type(nameInput, "Hello, World!"));
    await act(() => userEvent.type(checkInInput, "2023-10-10"));
    await act(() => userEvent.type(checkOutInput, "2023-10-11"));
    await act(() => userEvent.click(buttonElement));
    await waitFor(
      () => {
        scheduleRow = screen.getAllByTestId("schedule-table-body-row-test-id");
      },
      { timeout: 1000 }
    );
    expect(scheduleRow).toHaveLength(2);

    let isHelloWorldFound = false;

    scheduleRow.forEach((row: any) => {
      // Find the specific cell containing the text "Hello, World!"
      const cell = row.querySelector('[data-testid="schedule-name"]');
      if (cell && cell.textContent === "Hello, World!") {
        isHelloWorldFound = true;
      }
    });

    // Assert that "Hello, World!" was found in at least one row
    expect(isHelloWorldFound).toBe(true);
    // expect(scheduleRow).toHaveTextContent("Hello World");
  });
});
