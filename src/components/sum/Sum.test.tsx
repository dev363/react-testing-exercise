import Sum from "./Sum";

describe("Sum", () => {
  test("Numbee a:1 and b:2  sum = 3", () => {
    const result = Sum(1, 2);
    expect(result).toBe(3);
  });
});
