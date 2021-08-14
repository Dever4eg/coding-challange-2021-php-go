import find from "./finder.js"

const input1 = 'R2, L3';
const { x: x1, y: y1 } = find(input1)
console.assert(x1 === 2)
console.assert(y1 === 3)

const input2 = 'R2, R2, R2';
const { x: x2, y: y2 } = find(input2)
console.assert(x2 === 0)
console.assert(y2 === -2)

const input3 = 'R5, L5, R5, R3';
const { x: x3, y: y3 } = find(input3)
console.assert(x3 === 10)
console.assert(y3 === 2)

const input4 = 'R5, L56';
const { x: x4, y: y4 } = find(input4)
console.assert(x4 === 5)
console.assert(y4 === 56)
