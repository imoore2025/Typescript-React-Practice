import { calculation, getSumsFirst10 } from "./Exercise_1.js";

describe("calculation", () => {
  test("returns product when product <= 1000", () => {
    expect(calculation(20, 30)).toBe(600);
  });

  test("returns sum when product > 1000", () => {
    expect(calculation(50, 30)).toBe(80);
  });

  test("boundary: exactly 1000 returns product", () => {
    expect(calculation(40, 25)).toBe(1000);
  });
});

describe("getSumsFirst10", () => {
  test("returns 10 values", () => {
    expect(getSumsFirst10()).toHaveLength(10);
  });

  test("returns the correct sums", () => {
    expect(getSumsFirst10()).toEqual([
      1, 3, 5, 7, 9, 11, 13, 15, 17, 19
    ]);
  });
});
