import Sum from "../components/Sum";
test("Calculate sum of two number: ", () => {
  const result = Sum(5, 2);
  // assertion
  expect(result).toBe(7);
});
