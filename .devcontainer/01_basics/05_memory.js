// memory available are :
// Stack   and   Heap
// Stack (Primitive type)  and   heap(non-primitive)
//In Stack ,it makes a copy of the value ,in heap,it change the original value by giving the refeerence of it


// ex for primitive type :
let ytname="chaiaurcode@gmail.com"
let anotherytname=ytname
anotherytname="Ishika@gmail.com"

console.log(anotherytname);
console.log(ytname);


//ex for non primitive type: 
let userone ={
    email: "chaiaurcode@gmail.com",
    upi: "user@ybl"
}
let user2=userone
user2.email="Ishika@gmail.com"
console.log(userone);
console.log(user2);

