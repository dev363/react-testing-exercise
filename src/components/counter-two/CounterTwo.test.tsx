import { render, screen } from "@testing-library/react";
import { CounterTwo } from "./CounterTwo";
import userEvent from "@testing-library/user-event";

describe("Counter Two", () => {
  test("Counter Two test render correct", () => {
    render(<CounterTwo count={0} />);
    const isHeading = screen.getByRole("heading");
    expect(isHeading).toHaveTextContent("Counter Two");
  });

  test.only("handles are called", async () => {
    userEvent.setup();
    const incrementFn = jest.fn();
    const decrementFn = jest.fn();
    render(
      <CounterTwo
        count={0}
        handleIncrement={incrementFn}
        handleDecrement={decrementFn}
      />
    );
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    const decrementButton = screen.getByRole("button", { name: "Decrement" });
    await userEvent.click(incrementButton);
    await userEvent.click(decrementButton);

    expect(incrementFn).toHaveBeenCalledTimes(1);
    expect(decrementFn).toHaveBeenCalledTimes(1);
  });
});
