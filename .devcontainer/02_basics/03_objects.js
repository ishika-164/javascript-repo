// singleton    Singletons are classes which can be instantiated once, and can be accessed globally
// Object.create

// object literals

const mySym = Symbol("key1")   // creating a symbol


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",     // [] to define that it is symbol otherwise it is string
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)    // after freezing the object no changes are applied to the object
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);    // this -> used to point things in object
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());