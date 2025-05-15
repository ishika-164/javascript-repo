// IIFE(Imediately Invoked Function Expressions)
// WHY USE IIFE ??
// imediately call krne ke liye aur IMP : global pollution se koi effect na ho isliye (global var se ya declarations se)

//syntax: (function)(function execution)
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();    // here if ; not used then gives error as it will not execute the next IIFE (it will not know when to stop execution)


//Simple IIFE (arrow function)
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Ishika')