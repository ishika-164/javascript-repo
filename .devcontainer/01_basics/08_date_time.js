
let mydate=new Date()
//console.log(mydate.getMonth()); // Month ka numbering 0 indexed hai aur day ka 1 indexed hai , so can do +1 in Month to give user perfect data 
console.log(typeof mydate);  // object

//`${mydate.getDay()} and the time is ${myDate.getTime()}`

// console.log(mydate.toDateString());     //  Tue May 13 2025
// console.log(mydate.toISOString());      //  2025-05-13T11:03:16.426Z
// console.log(mydate.toJSON());           //  2025-05-13T11:03:16.426Z
// console.log(mydate.toLocaleDateString());   // 5/13/2025
// console.log(mydate.toLocaleString());       //  5/13/2025, 11:03:16 AM (MM/DD/YYYY)
// console.log(mydate.toLocaleTimeString());   //  11:03:16 AM
// console.log(mydate.toString());             //  Tue May 13 2025 11:03:16 GMT+0000 (Coordinated Universal Time)
// console.log(mydate.toTimeString());         //  11:03:16 GMT+0000 (Coordinated Universal Time)


//let mycreatedDate=new Date(2025,04,13)
//let mycreatedDate=new Date(2025,04,13,16,45)  // 5/13/2025, 4:45:00 PM
let mycreatedDate=new Date("05-13-2025")   // 5/13/2025, 12:00:00 AM
//console.log(mycreatedDate.toLocaleString());

// let timestamp=Date.now()
// console.log(timestamp);   //gives date tak ke miliseconds
// console.log(mycreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000)); // to avoid the decimal digits in ans

//to customize .toLocalestring() :
console.log(mycreatedDate.toLocaleString('default',{
    day:"numeric",
    weekday:"long",
    year:"numeric"
}))









