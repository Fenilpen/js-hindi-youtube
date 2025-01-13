// immediately invoked function expressions (IIFE)
// some times we face problems beacuse of global scope pollution
// so to remove that we use iife

// this is normal function

function fenil (){
    console.log("fenil11");
}
fenil();

// this is the exmaple of IIFE function

(function fenil (){
 console.log("fen22");
})();

//IIFE in arrow function

( ()=> console.log("arrow") )

// IIFE in arrow function with return

( (val) => val )
let nav = ("fen333")
console.log(nav);
