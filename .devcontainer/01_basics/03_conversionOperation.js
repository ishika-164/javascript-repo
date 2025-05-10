let score=true

//console.log(typeof score); //pehla tarika to see datatype of variable
//console.log(typeof(score));  ///dusra tarika to see datatype of variable

let valueinnum=Number(score) //coverts the datatype of var score -> number
//console.log(valueinnum);
//console.log(typeof(valueinnum));

//"33" -> 33
//"Ishika" -> NaN (not a number) but its datatype is still a number
//true ->1 ;false ->0

let isLoggedIn="Ishika"

let booleaniLoggedIn=Boolean(isLoggedIn)
//console.log(booleaniLoggedIn);
//console.log(typeof(booleaniLoggedIn));

//"" -> false (empty string)
//" Ishika" -> true
// (any number) -> true ;0 -> false

let number=33

let stringNumber=String(number)
// console.log(stringNumber);
// console.log(typeof(stringNumber));

// **************************             Operations          *************************************

let val=33
let negnumber=-val
console.log(negnumber);

// console.log( 2+2 );
// console.log( 2-2 );
// console.log( 2*2 );
// console.log( 2**3 ); //poer 
// console.log( 2/2);
// console.log( 2%2 );

let str1="Hello"
let str2=" Ishika"
let str3=str1 +str2
console.log(str3);

//difficulty : to add one string and other number
console.log("1" +2+2);  //first string is there so treat others coming as string too
console.log(1+2+"2");   //string is last so do operation 1+2 first considering them as numbers
//or can use () to define that operation is to be performed

console.log(+true); // ->1
//console.log(true+);  //error

console.log(+""); // ->0 as empty string is considered as 0 in number


let gameCounter=100
gameCounter++  //Postfix
++gameCounter   //Prefix
console.log(gameCounter);












