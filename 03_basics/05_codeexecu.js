// javascript execution context
// your code will go in this variable in global execution 
// the global execution context will be diffent in browser and your runtime environment

// we have three execution context
// global execution 
// functional executional context
// eval execution context

// these things will run in two phases
// in global execution =>
// 1 Memory creation phase (memory allocation for variables) =>
// 2 execution phase (values get defines)

// lets learn with example
// here is the sample code

// let val1 = 10
// let val2 = 5

// function addNum(num1 , num2){
//     return num1 + num2
// }

// let result1 = addNum(val1,val2)
// let result2 = addNum(10,2)


// first step towords execution

// 1 code will go in global execution context (this)

// 2 memory phase
// it will take all variables with undefined value
//
// val1 = undefined
// val2 = undefined
// addNum = defination
// result1 = undefined
// result2 = undefined

// 3 execution phase
// val1 = 10
// val2 = 5
//
// addNum [it will create new executional context] //for every function it will create new exec context
// [new variable environment + executional thread]
// memoryphase and execution phase
// val1 = undefined
// val2 = undefined
// total = undefined
//  
// executional context (prossesing)
// num1 = 10
// num2 = 5
// total = 15
// return total
// 
// [delete executional context]



//  call stack
//   ________
//   | fun3 |
//   | fun2 |
//   | fun1 |
//   |glo-ex|     // global execution
//   ________

//   Lifo concept
// last in first out