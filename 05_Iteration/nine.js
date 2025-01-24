// example in . reduce 

// const array = [10,20,30,40,50]

// let sum = array.reduce( (acc,curr ) => acc + curr, 0 )
// console.log(sum);


// taking example from shoping cart
// acc value 0 is must 

// By using 0 as the initial value, you ensure that the accumulator (acc) is always a number. 
// If you don't provide an initial value, the first object in the array becomes the initial accumulator, 
// which can lead to type inconsistencies and errors when you try to perform arithmetic operations on objects.


// let cart = [
//     {
//         items: "onion",
//         price: 35
//     },
//     {
//         items: "apple",
//         price: 60
//     },
//     {
//         item: "banana",
//         price: 50
//     }
// ]


// const total = cart.reduce( (acc,item) => { 
//     console.log(`acc:${acc} item: ${item.price}`);

//     return acc + item.price 
// },0)

// console.log(total);


// At the end lets compere three methods foreach, filter, reduce


// 1. forEach

// Purpose: Executes a provided function once for each array element.
// Usage: Useful for performing side effects, such as logging, on each element of an array.
// Returns: Undefined.

// 2. filter

// Purpose: Creates a new array with all elements that pass the test implemented by the provided function.
// Usage: Useful for filtering out elements that meet certain criteria.
// Returns: A new array with elements that pass the test.

// 3. reduce

// Purpose: Executes a reducer function on each element of the array, resulting in a single output value.
// Usage: Useful for accumulating a value based on the array elements, such as summing numbers or combining objects.
// Returns: A single value.
