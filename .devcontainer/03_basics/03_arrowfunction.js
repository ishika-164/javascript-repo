// this -> tells the current context value 
//browser ke andar global object hai window object 

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);  // this provides the current context values
// output: {
//   username: 'hitesh',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }
    }

}

//user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); 
// jab object ke bahar this lagaya to it is going to give an empty object 
// output: {}

 function chai(){
     let username = "hitesh"
     console.log(this); // isme bhot saari values milegi global var aur bhot kuch (undefined nai aayega isme)
     console.log(this.username);  // function ke andar this aise use nai krte hai : 
 }

//chai() //undefined( for this.username)

const chai = function () {
    let username = "hitesh"
    console.log(this.username);
}

const chai =  () => {
    let username = "hitesh"
    console.log(this);
    console.log(this.username);  // gives undefined as output

}


 chai()  // output: {} for only this

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// curly braces ke sath return statement likhna zaruri but parenthesis ke sath nhi 

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})
// object direct return krne ke liye usko ({key:value})

//console.log(addTwo(3, 4))


 const myArray = [2, 5, 3, 7, 8]

