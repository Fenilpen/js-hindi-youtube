// here lets start object de-structruring
// let me learn object assignment i will take one of property of object
// and assingn it to same varriable so i can easy access

const course = {
    courcename: "js in hindi",
    price: "0",
    courceInstructure : "Arayabhatt"
}

// console.log(course.courceInstructure) // old method

const {courceInstructure} = course // new method

// This line is saying, "Take the courceInstructure property from 
// the course object and create a variable called courceInstructure with its value."
// Essentially, it pulls out the value of the courceInstructure property from the course object 
// and assigns it to a new constant called courceInstructure

console.log(courceInstructure); // now i will simply put the varriable and log it

// let me try with another one

let {price : p} = course  // you can rename it by using :
console.log(p);
