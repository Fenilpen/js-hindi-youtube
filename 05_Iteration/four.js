// if you want to literate object there is for in loop to use

// let myobj = {
//     js: "javascript",
//     py:"python",
//     rb:"ruby"
// }

// for (const key in myobj) {
//  console.log(`${key} is for ${myobj[key]}`);
// }

// using for in loop in array

// const programming = ["js","rb","py"]

// for (const key in programming) {
//     console.log(programming[key]);
    
// }

// lets try for of in map

// let map = new Map()
// map.set("IN","India")
// map.set("FR","France")
// map.set("GEM","Germeny")

// console.log(map);

// for (const [key,value] of map){
//     console.log(value);
// }

// its confusing

// for...of is perfect for looping over the values of arrays, strings, maps, and sets. 
// It’s most effective when you care about the values.

// for...in is ideal for objects when you need to loop through the keys. 
// It's effective for tasks like copying or modifying properties.

// choose for...of for iterating over values in arrays and other iterable objects. 
// Opt for for...in when you need to deal with the properties of an object.

// for objects for in loop
// for arrays for of loop
// for map for of loop

//JavaScript Iterables and Non-Iterables

// Iterables (for of)
// Arrays
// Strings
// Maps
// Sets
// Typed Arrays
// Arguments Object
// NodeLists
// Generators

// Non-Iterables (for in)
// Objects (without implementing Symbol.iterator)
// Numbers
// Booleans
// Undefined
// Null
