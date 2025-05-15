//var c = 300  // do not use var 

// Block scope i.e. scope of function or if else jo ki sirf uss mai hi rehta hai 
// Global scope here next line comes under global scope 
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);  // here it is giving 10 
    
}

// console.log(a);   // here it is giving 300
// console.log(b);
// console.log(c);

// the scope that we are seeing here and the scope that we are gonna see on inspect->console it is different (Interview Question)

//DOM : Document Object Model


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);  //gives error

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);  // gives error as outside the scope
}

// console.log(username);  // gives error 


// ++++++++++++++++++ interesting ++++++++++++++++++

// Hoisting in JavaScript is a behavior where variable and function declarations are moved to the top of their scope before code execution.

console.log(addone(5))  // this won't give error as function is declared in diff way 
function addone(num){
    return num + 1
}


addTwo(5)  // this is going to give error as we are calling the function before declaring it 
const addTwo = function(num){  // declaring function sometimes it is also called as epression 
    return num + 2
}