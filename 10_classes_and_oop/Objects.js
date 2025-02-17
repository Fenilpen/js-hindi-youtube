// function multipleby5(num){
//     return num*5
// }

// multipleby5.power=2

// console.log(multipleby5(5));
// console.log(multipleby5.power);
// console.log(multipleby5.prototype);


// functions are actualy first class object , 
// meaning they can have properties just like regular objects.
// power is just a word


function proto (team,score){
   this.team = team
   this.score = score
}

proto.prototype.incresed = function (){
    let nan = this.score + 1
    return nan
}

proto.prototype.prints = function(){
    console.log(`hi this is ${this.team}`);
    
}

let india = new proto("india",350)
let england = new proto("england",312)

// console.log(india.score);
// console.log(england);

console.log(india.incresed())
console.log(england.incresed())

// Why is new Important in OOP?
// It allows object instantiation (creating multiple instances from a blueprint).
// It enables prototypal inheritance by linking the object's prototype.
// It makes code more organized and reusable.

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
