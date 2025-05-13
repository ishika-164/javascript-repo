const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)  // push adds the array as one single element in the existing array

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);   //output: flash

// const allHeros = marvel_heros.concat(dc_heros)  //  concat adds array elements into array as individual elements 
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]   // using spread operator (...) just like dropping a glass spreads (breaks) into pieces

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)  //infinity =depth i.e. till where it has to be flattened
console.log(real_another_array);



console.log(Array.isArray("Hitesh")) // gives if it is an array or not
console.log(Array.from("Hitesh"))    // ['H','i','t','e','s','h']
console.log(Array.from({name: "hitesh"})) // interesting  // we will have to define whether we want to make array from key or value!!  // output : []

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));