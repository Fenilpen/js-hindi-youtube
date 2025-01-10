// let me learn about function and return

   function fenil(num1 , num2) { // parameters
   return num1+num2;
   }
   let result = fenil(3,5) // arguments
   
   console.log("value of results", result);
   
   // when return accours function stops executing. means code will not
   // run after return statement 
   // you can return anytype of values number, strings , objects, arrays,functions
   
   
   function newfenil (userlogged){
   
       if (!userlogged){
           console.log("please enter correct info");  
           return     
       }
       else {
           return `${userlogged} justloggedin`
       }
   }
   
   console.log(newfenil())
   
   
   // while i was learning return i used copilot AI to explain, its worth reading
   
   
   // When a function returns a value, it sends that value back to the place where the function was called. 
   // Let's break this down with an example:
   
   
   // function multiply(a, b) {
   //     return a * b;
   // }
   
   // const product = multiply(4, 5);
   // console.log(product); // Output: 20
   
   
   // Here’s what happens step-by-step:
   
   // Function Call:
   // The function multiply is called with arguments 4 and 5: multiply(4, 5).
   
   // Execution:
   // Inside the multiply function, a * b is calculated, which is 4 * 5, resulting in 20.
   
   // Return Value:
   // The return statement sends the value 20 back to where the function was called.
   
   // Assignment:
   // The returned value 20 is assigned to the product variable.
   
   // Usage:
   // The value stored in product can now be used elsewhere in your code. 
   // In this case, it's logged to the console with console.log(product);, so you see 20 in the console.
   // So, the value is returned to the exact spot where you called the function. 
   // This makes functions really powerful because they can perform a task and give you the result wherever you need it.