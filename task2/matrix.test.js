import { getMatrices, combine } from "./matrix.js";

const input = "123456789012";

const matrixToString = (arr) => {
  return arr.reduce((acc, current) => acc + (Array.isArray(current) ? matrixToString(current) : current.toString()), "");
};

console.assert(matrixToString([[[1, 2, 3], [4, 5, 6]], [[7, 8, 9], [0, 1, 2]]]) === input);

const expected = [
  [
    [1, 2, 3],
    [4, 5, 6],
  ],
  [
    [7, 8, 9],
    [0, 1, 2],
  ],
];

console.assert(matrixToString(expected) === matrixToString(getMatrices(input, 3, 2)));

const uncombined = [
  [
    ["0", "0", "0"],
    ["1", "1", "1"],
    ["2", "2", "2"],
  ],
  [
    ["1", "2", "0"],
    ["1", "2", "0"],
    ["1", "2", "0"],
  ],
];

const expectedCombined = [
  ["0", "0", "0"],
  ["1", "1", "1"],
  ["1", "2", "0"],
];

console.assert(JSON.stringify(combine(uncombined, 3, 3)) === JSON.stringify(expectedCombined));
