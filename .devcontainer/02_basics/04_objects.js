const Appuser=new Object()    // declares singleton object
//OR 
const user={}    // non singleton object

//console.log(Appuser);
//console.log(user);

const tinderuser={
    id:"12345",
    email:"xyz@mail.com",
    name:"Ishika",
    isLoggedIn:"false"

}
//console.log(tinderuser.name);

//console.log(tinderuser);

// can declare object inside an object
const regularUser={
    id:"123",
    fullname:{
        userfullname:{
            firstname:"Ishika",
            lastname:"Choudhary"
        }
    },
    email:"some@gmail.com"
}
// accessing object  present inside the object
console.log(regularUser.fullname.userfullname.firstname);

//How to merge objects:
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3={5:"a",6:"b"}

//const obj4={obj1,obj2,obj3}   // is gonna give objects inside the target object not the key value pairs all together
// above stated is the wrong way
//console.log(obj4);

const obj4=Object.assign({},obj1,obj2,obj3)  // synatx is Object.assign(target,source)  , so {} is gonna act as target i.e. it is sure that the result is going to be an object  
// you can also skip {} then obj1 is going to act as target
//console.log(obj4);

const obj5={...obj1,...obj2,...obj3}
//console.log(obj5);   // using spread operator , both are gonna give same output

//Array having objects as its elements
const arr=[
    {
        id:"123",
        email:"xyz@gmail.com"
    },
    {
        id:"12",
        email:"xyz@gmail.com"
    },
    {
        id:"1",
        email:"xyz@gmail.com"
    }
]
// console.log(arr[1].email)

console.log(tinderuser);
//console.log(Object.keys(tinderuser));  // its datatype is array   **** IMP POINT
//console.log(Object.values(tinderuser));   // datatypee is array
//console.log(Object.entries(tinderuser));   //datatype is array
// now one can use this array and aaply loop on it for the use

console.log(`Have property named isLoggedIn?  : ${tinderuser.hasOwnProperty("isLoggedIn")}`);

// to get more methods of object go to console

//de-structure the object
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor  kr skte hai aisa par agr baar baar krna ho to 

const {courseInstructor: instructor} = course   // { } denotes de structure

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }    this is JSON(javascript object notation) object is not given any name  

// API can also be given in an array form that conatins objects
[
    {},
    {},
    {}
]
// API  matlab jab aapko kaam nai krna hai to kisi aur par daal do vo hai API 
//EX : on google one person login ,he doesn't have to worry about the verification of the person and all other thinge that API is gonna do
