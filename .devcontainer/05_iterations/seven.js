const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

//chaining : ek method ke baad dusra method
const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1) // yaha par jo upar method lagne ke baad array aaya hoga vo yaha pass hoga
                .filter( (num) => num >= 40)

console.log(newNums);