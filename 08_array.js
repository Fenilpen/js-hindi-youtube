// let me teach mySelf array in arrey rey way (hehe:)

// array's type of is object but object is in key pair value and array is bit diffrent 
// so array is type of abject but in length way like index 
// before start to learn array lets find out how to declere array and type of array

// let newArray = [1,2,3,4,5,6,7,8,9]   // we declered array

// let newArray2 = new Array(1,2,3,4,5,6,7,8,9) // another way to declere array
// console.log(typeof newArray2);  // return object

// console.log(Array.isArray(newArray))  //returns true
// this is new thing to check its an array or not i found on copilot

// to know index of value (location of your value)
// console.log(newArray.indexOf(3)); //returns index of value  

// Determines whether an array includes a certain element
// console.log(newArray.includes(4)); // returns true or false

// lets menuplate array using push to add and pop to remove *****************

// console.log(newArray);  // first we will check our original array 

// let array1 = (newArray.push(10));  //it will add 10 as new value at the end
// console.log(newArray);

// let array2 = (newArray.pop()) // it will remove last value
// console.log(newArray);

// Fact:- hence proved that array is non primitive data type +++++++++++++++++++++

// lets menuplate array using swift and unswift

// let array3 = newArray.unshift(5)  // Inserts new elements at the start of an array
// console.log(newArray);

// let array4 = newArray.shift() // Removes the first element from an array and returns it
// console.log(newArray);

//lets convert array in string  ************

// let newString = newArray.join()  // we are using join method to convert array
// console.log(newString);
// console.log(typeof newString);  //returns string


// Spice and Slice  ******************* 
// splice will change value in refference 
// slice will change value in copy array

// let array5 = [1,2,3,4,5,6,7,8,9]
// let array6 = array5.splice(0,3)
// console.log(array5);
// console.log(array6);

// console.log("**************************");

// let array7 = [1,2,3,4,5,6,7,8,9]
// let array8 = array7.slice(0,3)
// console.log(array7);
// console.log(array8);
