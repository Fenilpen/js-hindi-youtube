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

{1}

Playing with Types

Task 1:
Write a function stringToNumber that takes a string input and tries to convert it to a number. If the conversion fails, return "Not a number".

Task 2:
Write a function flipBoolean that takes any input and converts it to its boolean equivalent, then flips it. For example, true becomes false, 0 becomes true, etc.

Task 3:
Write a function whatAmI that takes an input and returns a string describing its type after conversion. If it's a number, return "I'm a number!", if it's a string, return "I'm a string!"

Task 4:
Write a function isItTruthy that takes an input and returns "It's truthy!" if the value is truthy in JavaScript, or "It's falsey!" if it's falsey.


Answers

1/
function stringToNumber(input) {
    let num = Number(input)
    if (isNaN(num)){
        let conv = "Not a number"
        return conv
    } else {
        return num 
    }``
}

2/
function flipBoolean(input) {
    let conv = Boolean(input)
    return !conv
}

3/
function whatAmI(input) {
    const converted = Number(input); 

    if (!isNaN(converted)) {
        return "I'm a number!";
    } else if (typeof input === 'string') {
        return "I'm a string!";
    } else {
        return "I'm something else!";
    }


}

4/
function isItTruthy(input) {

    if (input){
        return   "It's truthy!"
    }
    else {
        return "It's falsey!"
    }
}

whatAmI("fenil")
stringToNumber("11")
flipBoolean(0)
isItTruthy("fenil")
