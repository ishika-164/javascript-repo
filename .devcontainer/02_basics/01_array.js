//shallow copy: makes changes in the original array
//deep copy: does not make changes in the original array (deep copy of an object is the copy that does not share same references as those of the source object)

//ways of decalaring array:
const myarr=[1,2,3,4,5]
const arr2=new Array(1,2,3,4,5)

//console.log(myarr[0])

//Array Methods:
// myarr.push(6)
// myarr.push(7)
// myarr.pop()
// console.log(myarr);

myarr.unshift(0)  // add element in front of the array i.e. at the start
//console.log(myarr);
myarr.shift()    //removes element from the start
//console.log(myarr);

//console.log(myarr.includes(9));  //false  (gives ans in boolean type)
//console.log(myarr.indexOf(8));   //-1 (as it does not exist)

const arr1=myarr.join()   // join converts array into "string"  datatype 
//console.log(arr1);
//console.log(typeof arr1);

//slice  , splice operation:
console.log("A ",myarr);
console.log(myarr.slice(1,3));    //slice does not change the original array and does not include the 3
console.log("B ",myarr);

console.log(myarr.splice(1,3));    //splice manipulates the original array and includes 3 and cuts that part from the original array
console.log("C ",myarr);

// output: 
// A  [ 1, 2, 3, 4, 5 ]
// [ 2, 3 ]            : slice output
// B  [ 1, 2, 3, 4, 5 ]  Original array after using slice
// [ 2, 3, 4 ]         : splice output
// C  [ 1, 5 ]           Original array after using splice












