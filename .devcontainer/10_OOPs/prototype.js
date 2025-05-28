// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);  


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){    //object ke prototype mai dala to array function aur sab usko accesskr payenge  
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){  // array ke prototype mai dala to sirf array hi access kr payega 
    console.log(`Hitesh says hello`);
}

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport   // 1st way to connect two object's properties
}

Teacher.__proto__ = User   // 2nd way 

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)   // 3rd and modern way

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()   // isme anotherusername ka reference dega
"hitesh".trueLength()   // isme call hitesh ne kiya to this hitesh ka refernce dega 
"iceTea".trueLength()    // isme this icetea ka refernce dega 