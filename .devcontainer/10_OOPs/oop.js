const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this   // ye immplicitely defined hai agar ye nai bhi likhoge to bhi same output dega vo
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)  // new is a constructor and it initiaize new context /new instance
console.log(userOne.constructor);   // output: [Function : User]
// agar abhi console.log(userOne) iska output chaiaurcode  vala hota as userto ne overrite kr diya hai
//console.log(userTwo);

//Steps of new:
// 1: ek empty object banta hai {}
// 2: consructor functtion call hota hai new ke sath , parameters aur arguments sab ko pack krta hai
// 3: this mai vo saare arguments aur sab inject hote hai
// 4: aap ko mil jate hai function ke andar 