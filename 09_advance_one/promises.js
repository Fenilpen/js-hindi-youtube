const promiseOne = new Promise (function(resolve,reject){
    // Do an async task
    // DB calls, cryptography, network

    setTimeout(function(){
        console.log('async task is compelete');
        resolve()
    },1000)
})

promiseOne.then(function (){
    console.log('promise consumed');
})

//

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async task 2');
        resolve()
    },1000)

}).then(function(){
    console.log('async 2 resolved');
})

// consuming and passing data

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: 'fenil chai', email: 'abcd.com'})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

//

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: "fenil",password:"123"})
        } else{
            reject('ERROR: Something Went Wrong')
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);  
})
.catch(function(error){
    console.log(error);
})
.finally(()=>console.log('the promise is either rejcted or resolved')
)

//

const promiseFive = new Promise (function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "javascript",password:'123'});
        }else{
            reject('ERROR: JS went wrong')
        }
    },1000)
})

async function consumePromiseFive (){
    try {
        const responce = await promiseFive
        console.log(responce);
    }
    catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     }
//     catch(error){
//         console.log('E: ',error);
        
//     }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((responce)=>{
    return responce.json()
})
.then((data)=>{
    console.log(data);
})
.catch((eror)=>console.log(eror))
