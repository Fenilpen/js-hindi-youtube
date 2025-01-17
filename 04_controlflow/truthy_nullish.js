// truthy values
// falsy values


// falsy values
// false, 0 , -0, BigInt 0n , "" , null , undefined, NaN

// truthy values
// "0", 'false', " ", [] , {} , function(){}

// check array value using length in if statement

// const userEmail = []

// if (userEmail.length === 0) {
//     console.log("array is empty");
    
// } else {
//     console.log("not empty");
    
// }

// lets check object value

// const obj1 = {}

// if (Object.keys(obj1).length === 0){
//     console.log("its empty");
    
// }

// Nullish coalescing operator (??): null undefined

// The ?? operator in JavaScript is called the nullish coalescing operator. 
// It is used to provide a default value when dealing with null or undefined values. 
// Essentially, it returns the right-hand operand when the left-hand operand is null or undefined; 
// otherwise, it returns the left-hand operand

// example 1
// let name1 = null ?? "fenil"
// console.log(name1);

// example 2
// let name2 = null ?? "fen" ?? 12
// console.log(name2);


// terniary operator  // ?? and ? is diffrent
// terniary operator and Nullish both are diffrent
// condition ? true : false (terniary syntex)

// let iceTeaPrice = 100
//                          (if true)                 (if false)
// iceTeaPrice <= 70 ? console.log("less than 70"): console.log("more than 70");