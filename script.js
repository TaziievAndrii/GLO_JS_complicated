"use strict"

const arr = [ "234", "43", "34", "54", "432", "298", "321"];
for (let i = 0; i < arr.length; i++) {
    if (arr[i].startsWith("2") || arr[i].startsWith("4")) {
         console.log(arr[i]);
    }
}

const num = 100;

for(let i = 2; i <= num; i++) {

    let isPrime = true

    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrime = false
        }
    }
    if (isPrime) console.log(i + " мои делители " + 1 + " / "+ i);
}