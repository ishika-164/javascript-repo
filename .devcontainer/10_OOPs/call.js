function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)  // .call se hum us function ka refernce hold kr ke rkh rhe nai to jab us ka kaam ho jayega uska execution context hat jayega to uske saare var vagera sab hat jayenge to humne jaha usse call kiya vaha tak to vo pohancha hi nai  AND this current context de rha hai ki mera this use kro tumhara nai kyunki vo to hat jayega na 
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);