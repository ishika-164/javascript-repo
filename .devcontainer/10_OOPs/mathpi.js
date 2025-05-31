const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
Object.defineProperty(Math,'PI',{
    writable: true,  // ye ho hi nai skta kyunki ye hardcoded hai aur false hi rehti hai aap isko true nai kr skte 
    enumerable:true
})
 console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

// par aap apna object bana ke usme ye set kr skte ho : writable enumerable configurable ye sab:
const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

//console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    //writable: false,
    enumerable: true,    // isse agar false krde to object ki us property par iterate nai kr payenge 
    
})

//console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// for (let [key, value] of Object.entries(chai)) {
//     if (typeof value !== 'function') {
        
//         console.log(`${key} : ${value}`);
//     }
// }