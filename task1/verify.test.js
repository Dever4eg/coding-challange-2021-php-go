import verify from "./verify.js";

console.assert(verify(111111)  === true)
console.assert(verify(112347)  === true)
console.assert(verify(1111111) === false)
console.assert(verify(11111)   === false)
console.assert(verify(123678)  === false)
console.assert(verify(122628)  === false)
