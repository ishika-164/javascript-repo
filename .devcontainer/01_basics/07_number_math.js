const num=100
//console.log(num);

const balance=new Number(100)
//console.log(balance);    //see the difference in output 

//console.log(balance.toExponential(2));
//see many other methods(prototypes) in console by typing this statement there

const hundreds= 100000
//console.log(hundreds.toLocaleString('en-IN'));  // output : 1,00,000

//to see the value (max ,min or other) of Number then go to console 


//******************** MATHS ***************************
// it the most powerful library that comes with javascript

//console.log(Math);  // it is an object  // go to the console to see the default values and other methods
// console.log(Math.round(2.33));
// console.log(Math.abs(-5));
// console.log(Math.floor(4.6));
// console.log(Math.ceil(5.2));
// console.log(Math.min(1,3,5,7));
// console.log(Math.max(2,4,6,8));

//console.log(Math.random());  // gives random numbers from 0 to 1 only 
//console.log((Math.random()*10)+1);   // adding 1 to ensure that 0 is not coming as an output
//console.log(Math.floor((Math.random()*10)) +1);  //to get only integers

//can also do like this:
const min=10
const max=30

console.log(Math.floor(Math.random()*(max-min+1)) +min );  // adding min to ensure that output is above min 










