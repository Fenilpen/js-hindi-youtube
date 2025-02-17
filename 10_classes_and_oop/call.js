function setusername(username){
    // complex db calls
    this.username = username
}

function getusername(username,email,password){
    setusername.call(this,username)
    this.email = email
    this.password = password
}


let data = new getusername('fenil','fenil@.com','213654')

console.log(data);
