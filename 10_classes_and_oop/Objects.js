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
