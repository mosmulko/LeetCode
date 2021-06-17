const sqrt = require("../69.sqrt(x)");

test("returns square root of 0", () => {
  expect(sqrt(0)).toBe(0);
});

test("returns square root of 1", () => {
  expect(sqrt(1)).toBe(1);
});

test("returns square root of 4", () => {
  expect(sqrt(4)).toBe(2);
});

test("returns square root of 9", () => {
  expect(sqrt(9)).toBe(3);
});

test("returns floored square root of 8", () => {
  expect(sqrt(8)).toBe(2);
});

test("returns floored square root of 20", () => {
  expect(sqrt(20)).toBe(4);
});

test("returns floored square root of 150", () => {
  expect(sqrt(150)).toBe(12);
});

test("returns floored square root of 300", () => {
  expect(sqrt(300)).toBe(17);
});

test("returns floored square root of 456789", () => {
  expect(sqrt(456789)).toBe(675);
});

test("returns floored square root of 48790225", () => {
  expect(sqrt(48790225)).toBe(6985);
});
