let Tname = "fenil"
let marks = 56

// string interpolition
console.log(Tname + marks + "confirmed");  // old style not recommend
console.log(`the name is ${Tname} and the marks is ${marks}`);  // recommend


let gameName = new String('   fenil   ')   // declering string in non-Primitive (object)

// The primitive string 
// const gameName = 'fenil'; is of type "string".
// The object string 
// const gameName = new String('fenil'); is of type "object".

// these are few methods of string there are many out of this

console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase())
console.log(gameName.substring("0","3"))
console.log(gameName.slice("-4","3"))
console.log(gameName.trim())

// few methods with URL

let url  = "www.fen-iljj.com"
let newUrl = url.replace("-","")
console.log(newUrl)

console.log(url.includes("fen"))
console.log(url.split("-"))