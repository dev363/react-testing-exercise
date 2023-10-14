import { act, render, renderHook, screen } from "@testing-library/react";
import { useCounter } from "./userCounter";

describe("userCounter Custom Hook", () => {
  test("Check userCounter render correctlly", () => {
    const { result } = renderHook(useCounter);
    // console.log(result);
    expect(result.current.count).toBe(0);
  });
  test("Check Pass intialCount and get same", () => {
    const { result } = renderHook(useCounter, {
      initialProps: {
        initialCount: 10,
      },
    });
    expect(result.current.count).toBe(10);
  });

  test("Increment Count", () => {
    const { result } = renderHook(useCounter);
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
    act(() => {
      result.current.decrement();
    });
    expect(result.current.count).toBe(0);
  });
});
