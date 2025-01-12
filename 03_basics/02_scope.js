// let me learn about scopes

// case 1

let a = 10
const b = 20
var c = 30  // this is global

// console.log(a);
// console.log(b);
// console.log(c);

// this works completly fine
// but the problem will start accours in this 

// {} <=this is scope 
// scope in objects are diffrent they are object decleretion
// scope comes with if , functions they are called scope

// case 2

if (true){
    let a = 1
    const b = 2
    var c = 3
    
    console.log("inner",a);
    console.log("inner",b);
    console.log("inner",c);
    
} // this is scope

// let, const will follow scopes but var will not

console.log("outer",a);
console.log("outer",b);
console.log("outer",c);

// know why var is cusing trouble var only follow global scope
// Variables declared inside a block (like within {}) 
// can only be accessed within that block. but in var the story is diffrent
// var dont follow any scope he is goon 

// more explaination and diffrence bitween globle scope and local scope 

// Global Scope:
// Variables or functions declared outside of any function or block have global scope.
// These can be accessed from anywhere in your code.
// It's like writing something on a big whiteboard that everyone in the room can see.

// Local Scope:
// Variables or functions declared inside a function have local scope (function scope).
// These can only be accessed within that specific function.
// It's like writing something in your personal diary, which only you can read.

// block scope: 
// introduced with let and const in ES6 (modern JavaScript). 
// Variables declared inside a block (like within {}) can only be accessed within that block.

// special note
// scope in node and console will be diffrent

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// lets take a small look on hoisting
// what happen when you call something before you decleare

// console.log(fenil);  // undefined
// console.log(feni);  // reference error
// console.log(nil); // reference error 

// var fenil = 2345
// let feni = 6787989
// const nil = 9876


// console.log(myname("f"))  //get the output f1

// function myname (nam){
//    return nam + 1
// }


// name1("h") // refrence error

// let name1 = function(naam){
//    return naam + 1
// }
