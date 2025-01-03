// playing with the numbers in javascript

let scam = 500
console.log(scam);

let newScam = new Number(500);
console.log(newScam)

console.log(newScam.toFixed(1));

let otherNumber = 34.5556
console.log(otherNumber.toPrecision(3))

let hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))


// ------------------  Maths in Javascript  methods for .Math

console.log(Math)
console.log(Math.abs(-5));
console.log(Math.round(4.4));
console.log(Math.ceil(4.7));
console.log(Math.floor(4.9));
console.log(Math.max(12,23,45,67,78))
console.log(Math.min(12,23,45,67,78))

console.log(Math.random())
console.log(Math.Floor(Math.random()*10) + 1)  // to get random number from 1 to 10


let max = 50
let min = 25

console.log(Math.floor(Math.random()*(max - min + 1)) + min);

// second method for the same answer

console.log(Math.floor(Math.random() * 26) + min );