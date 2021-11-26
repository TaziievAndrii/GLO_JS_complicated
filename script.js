const num = 266219;
let arrNum = num.toString().split("").reduce((x, y) => x * y);
let degree = arrNum ** 3;

console.log("[arrNum]", arrNum);
console.log("[degree]", degree);
console.log("[degree]", degree.toString().slice(0, 2));