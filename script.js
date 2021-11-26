let num = 266219;

let arrNum = num.toString().split("").map(Number);

let total = 1;
for (let i = 0; i < arrNum.length; i++) {
    total *= arrNum[i]
}

console.log(total);

let degree = total ** 3;
console.log(degree);
console.log(degree.toString().slice(0, 2));