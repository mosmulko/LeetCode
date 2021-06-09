const twoSum = require("./twoSum");

test("returns indexes of only 2 elements if they add up to the second argument", () => {
  expect(twoSum([1, 2], 3)).toEqual([0, 1]);
  expect(twoSum([1, 3], 3)).not.toEqual([0, 1]);
});

test("returns an error message if arguments don't add up", () => {
  expect(twoSum([1, 0], 3)).toEqual("no matching indexes");
});
