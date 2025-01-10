// to create objects there is two types 
// one is litral (non-singleton) and another one is constructor (singleton) 
// Object.create

// object literals

// let mySym = Symbol("mySy")

// const JsUser = {
//     name: "fenil",
//     "full name": "fenil patel",
//     [mySym]: "mykey1",
//     age: 24,
//     Location: "koba",
//     email: "fenil@example.com",
//     isLoggedIn: false,
//     LastLoginDays: ["monday","saturday"]
// }


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
// console.log(JsUser);


// *************************************Part--2*************************

// this is the second type of object singleton

// let newobject = new Object() // singleton object

// const tinderUser = {} // non singleton object

// tinderUser.id = "123abc"
// tinderUser.name = "sammy"
// tinderUser.isLoggedIn = false

// // console.log(tinderUser);


// const regularUser = {
//     email: "somegmail.com",
//     fullname: {
//           username: {
//             firstname: "fenil",
//             lastname: "patel",
//           }
//     }
// }

// console.log(regularUser.fullname.username.firstname);

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3:"a", 4:"b"}
// const obj4 = {5:"a", 6:"b"}

// const obj3 = {obj1,obj2}
// const obj3 =  Object.assign({},obj1,obj2,obj4)

// const obj3 = {...obj1,...obj2,...obj4}
// console.log(obj3);


// const users = [

//     {
//         id: 1,
//         email: "www.harakha@.com"
//     },

//     {
//         id: 1,
//         email: "www.harakha@.com"
//     },

//     {
//         id: 1,
//         email: "www.harakha@.com"
//     },
    
// ]

// users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
