let name="Ishika"
let repocount=2

//console.log(name+repocount+" Value"); // not a good ting to represent

console.log(`My name is ${name} and my repo count is ${repocount}`); //good // `` -->this is called backtext

const gamename=new String('Ishikaaaa')
//console.log(gamename[1]);
//onsole.log(gamename.__proto__);

console.log(gamename.indexOf('a'));
const substring=gamename.substring(1,3)
console.log(substring)

const slicestring=gamename.slice(-8,4)  //negative means from back
console.log(slicestring)

const string1="   Ishika   "
console.log(string1);
console.log(string1.trim());  // others like trim start and trim end are also there

const url="https://Ishika/Ishika.com$hello"
console.log(url.replace('$','_'));
console.log(url.includes('_'));

console.log(url.split('/'));
console.log(url.toWellFormed());
