// here i am starting loop, for loop 
// . length property is still confusing let me learn this again

// In JavaScript, length is a property of arrays (and also strings) that tells you how many items are in the array (or characters in a string). 
// When we say fruits.length, we're asking for the number of elements in the fruits array.

// Let's visit the example:

// let fruits = ["Apple","Banana","Cherry","Date","Elderberry"]

// for (let i = 0; i < fruits.length; i++) {
//     const element = fruits[i];
//     console.log(element);
// }

// Apple
// Banana
// Cherry
// Date
// Elderberry

// Here’s how it works:

// Initialization: let i = 0 - We start with i at 0.

// Condition: i < fruits.length - This checks if i is less than the number of items in the fruits array. fruits.length is 5 because there are 5 elements in the array.

// Update: i++ - This increases i by 1 after each loop iteration.

// So, the loop runs as long as i is less than 5:

// When i is 0, fruits[i] is "Apple".

// When i is 1, fruits[i] is "Banana".

// When i is 2, fruits[i] is "Cherry".

// When i is 3, fruits[i] is "Date".

// When i is 4, fruits[i] is "Elderberry".

// Once i becomes 5, the condition i < fruits.length (which is 5 < 5) is false, and the loop stops.

// Think of fruits.length as a way to dynamically know how many times to loop, 
// based on the actual number of items in the array. 
// This is useful because you don’t have to manually count the elements or hard-code a number. 
// It adapts if your array changes size.

// lets take simple example in for (print 1 to 10)

// for(let i = 1; i < 11; i++){
//   let marks = i
//   console.log(marks);
  
// }


// lets take one example in for table (print tables)

// for (let i = 1; i < 11; i++){
// let count = i 
// console.log(`the table of ${count}`);

// for (let j = 1; j < 11; j++) {
//   const element = j;
// //  console.log(`${i} * ${j} = ${i*j}`);
//   console.log(i +" * "+ j +" = "+ i*j );
  
//  }

// }

// if you see i use two styles to log the tables

//take another example to use break keyword

// for(let i = 1; i <= 20; i++){
  
//     if(i == 5) {
//     console.log(`dtetcted ${i}`);
//     break; 
//     }
  
// console.log(i);  
// }

// you can use continue keyword it will forgive the condition 
// for one time

// for(let i = 1; i <= 20; i++){
    
//     if(i == 5) {
//       console.log(`dtetcted ${i}`);
//       continue; 
//     }
    
//   console.log(i);  
//   }