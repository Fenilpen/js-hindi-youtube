const promiceOne = new Promise(function (resolve, reject) {
    // do an async task
    // DB calls, cryptography, network
    setTimeout(function (){
        console.log('async task is complete');
        resolve()
    },1000)
})

promiceOne.then(function (){
    console.log("promice consumed");
})

/// 

new Promise(function (resolve,reject){
    setTimeout(function (){
        console.log('async task 2');
        resolve()
    },1000)

}).then(function(){
    console.log('async 2 resolved');
})

///

const promiceThree = new Promise(function (resolve,reject){
    setTimeout(function (){
        resolve({username:'chai',email: 'example@gmail.com'})
    },1000)
})

promiceThree.then(function(user){
    console.log(user);
})

///

const promiseFour = new Promise(function (resolve,reject){
    setTimeout(function (){
        let error = false
        if (!error){
            resolve({username: 'fenil', password: '123'})
        } else {
            reject('ERROR: something went worng')
        }
    },1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
})
.then((username)=>{
console.log(username);
})
.catch(function(error){
    console.log(error);
}).finally(()=> console.log('the promise is finaly over'))


///
