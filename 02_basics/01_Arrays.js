// let me teach mySelf array in arrey rey way (hehe:)
// few methods few trics to convert to combine

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
//slice will change value in copy array

// let array5 = [1,2,3,4,5,6,7,8,9]
// let array6 = array5.splice(0,3)
// console.log(array5);
// console.log(array6);

// console.log("**************************");

// let array7 = [1,2,3,4,5,6,7,8,9]
// let array8 = array7.slice(0,3)
// console.log(array7);
// console.log(array8);


// Part 1 basics of the Array is compelete lets move on the another part 2


//So here is the qustion lets merge to array 

// let array9 = [1,2,3,4,5]
// let array10 = [6,7,8,9,10]

// let array11 = array9.push(array10)
// console.log(array9);     // ahhhho push, it didt worked 

// let array11 = array9.concat(array10)
// console.log(array11);    // yeah boy it worked

// but hoe about mixing 3 or more arrays ????
// here its comes spred operetor [...xyz]

// let arraySpred = [...array9,...array10]
// console.log(arraySpred);

// spred operetor is more usable and easy to use 

// lets check another problem
// suppose you have array in array in array and you need to flat it 

// let arrayinArray = [ 12,45,[23,45],34,[23,67,[3,45,8],44],78]
// console.log(arrayinArray.flat(Infinity));  

// you need to give depth or you can give infinity

// lets talk about three basic array methods ***********************

// how to check if the value is in array or not

// console.log(Array.isArray("fenil"));  // false
// ok then how to convert in to array
// console.log(Array.from("fenil"));  // we did it

// you have got three variables now combine all three in one array
// let score = 100
// let score2 = 200
// let score3 = 300
// console.log(Array.of(score,score2,score3));

// lets use spred operetor
// let score4 = [...score,...score2,...score3]
// console.log(score4); 
// heheheh dont try to be smart, we were combine number not array


// ok thanks this is enough