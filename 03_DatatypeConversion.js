//datatype conversion number to string
// we wiil use String() to convert any datatype in to string

let fenil = 22   //its an original type number
console.log(fenil);
console.log(typeof fenil);

let changeFenil = String(fenil) //now its changed in string
console.log(changeFenil);
console.log(typeof changeFenil);


// same with string to convert in to number

let vishnu = "333"
console.log(vishnu);
console.log(typeof vishnu);

let newVishnu = Number(vishnu)
console.log(newVishnu);
console.log(typeof newVishnu);


// "33" => 33    /string to number
// "33fenil" => NaN    /string to number
// true => 1; false => 0   /number to boolean and vice versa
// "" => false   string to boolean
// "fvds" => true  dtring to boolean