// for of loop
// The for...of loop in JavaScript is a handy tool for iterating over iterable 
// objects such as arrays, strings, maps, sets, and more.

// what is iteration
// you have a playlist of your favorite songs, and you want to play each song one by one. 
// Iteration in JavaScript is like a way to go through each song in your playlist. 
// Instead of manually hitting "next" for each song, you write a loop to do it for you.


// for of loop example 1 with numbers

// let myarray = [1,2,3,4,5,6,7]

// for (let narray of myarray){
//     console.log(narray);
// }

// for of loop example 2 with string

// let mystring = "Fenil Patel"

// for (let newstring of mystring){
//     console.log(newstring);
// }

// lets jump in to maps
// check the diffrence 

// let map1 = new Map()
// console.log(map1);

// let obj = {}
// console.log(obj);

// console.log(typeof map == obj);

// now iterate the map

// let map = new Map()
// map.set("IN","India")
// map.set("FR","France")
// map.set("GEM","Germeny")

// console.log(map);


// lets try for of loop in map

// for (let mapi of map){
//     console.log(mapi);
// }

// output is in array
// but what if we need in string lets try
// i will use [] syntex

// for (let [key,value] of map){
//     console.log(key,":-",value);
    
// }

// now try iterate in object 

// let obj1 = {
//     game1: "cricket",
//     game2: "football",
//     game3: "baseball"
// }

// for (const myObject of obj1) {
//     console.log(myObject);
// }

// obj1 is not iterable