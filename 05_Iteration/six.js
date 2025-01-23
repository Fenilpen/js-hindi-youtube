// return foreach
// const coding = ["js","ruby","java","python","cpp"]

// const value = coding.forEach((item)=>{
//     console.log(item);
//     return item
// })

// console.log(value);

// for each can't return the values

// trying filter with condition and returns

// const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter((num) => {return num > 4})

// console.log(newNums);



// forEach

// const num1 = []

// myNums.forEach( (num) => {
//     if (num > 4 ) {
//         num1.push(num)
//     }
// } )

// console.log(num1);


// using filter to get the values from the database

// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];


// const userbooks = books.filter( (bk) => bk.genre === "History" )
// console.log(userbooks);

// let user2000 = books.filter( (bk) => {return bk.publish <= 1990} )
// console.log(user2000);

// user2000 = books.filter( (bk) => {return bk.publish <= 1990 && bk.genre === "History"} )
// console.log(user2000

// using map to + values


// const numbers = [1,2,3,4,5,6,7,8,9,10]

// let mynumbers = numbers.map( (num) => num + 10 )
// console.log(mynumbers);
