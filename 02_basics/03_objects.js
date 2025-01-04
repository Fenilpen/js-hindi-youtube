// to create objects there is two types 
// one is litral and another one is constructor
// constructor == singleton
// Object.create

// object literals

let mySym = Symbol("mySy")

const JsUser = {
    name: "fenil",
    "full name": "fenil patel",
    [mySym]: "mykey1",
    age: 24,
    Location: "koba",
    email: "fenil@example.com",
    isLoggedIn: false,
    LastLoginDays: ["monday","saturday"]
}


// how to access values
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);


// how to edit values
// JsUser.email = "fenil@gpt.com"

// how to freeze(lock) values
// Object.freeze(JsUser)
// JsUser.email = "fenlkjhbv.com"
// console.log(JsUser);

// how to add functions in object

// JsUser.greeting = function(){
//     console.log("hello there");
    
// }

// JsUser.greetingTwo = function(){
//     console.log(`hello there ${this.name}`);
    
// }

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());
console.log(JsUser);
