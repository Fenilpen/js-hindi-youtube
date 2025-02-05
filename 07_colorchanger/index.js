const buttons = document.querySelectorAll('.button')
const body = document.body

buttons.forEach( (button) => {
  // console.log(button)
  button.addEventListener('click',(e)=>{
    console.log(e)
    console.log(e.target)
    if(e.target.id === 'grey' ){
       body.style.backgroundColor = button.id
    }
    if(e.target.id === 'red' ){
       body.style.backgroundColor = button.id
    }
    if(e.target.id === 'blue' ){
       body.style.backgroundColor = button.id
    }
    if(e.target.id === 'yellow' ){
       body.style.backgroundColor = button.id
    }
  })

})


//  clearing confution qustion
//  what is the diffrence bitween these two

//  const buttons = document.querySelectorAll('.button'); 
//  const button2 = document.getElementsByClassName('button');

//  1. Selector Type:

// querySelectorAll('.button'):
// Uses CSS selectors.
// Can find elements using complex rules (like .button, #main > .button, div.button, etc.).
// More flexible in how you search.

// getElementsByClassName('button'):
// Uses class names only.
// Simpler and faster when you're looking for elements with a specific class.

// 2. Type of Collection Returned:

// querySelectorAll:
// Returns a NodeList.
// It's static—doesn't change if the document changes.
// Think of it as a photo you took at a moment in time.

// getElementsByClassName:
// Returns an HTMLCollection.
// It's live—updates automatically when the document changes.
// Like looking through a window; you see changes in real-time.

// we can use for loop for HTMLcollection
