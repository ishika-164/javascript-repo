class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{   //Teacher user ka instance hai
    constructor(username, email, password){
        super(username)   // super khuhd se hi dekh leta hai aap kis class ko extend kr rhe ho udhar jakar khud ka this lejata hai aur value le aata hai
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")  // chai Teacher ka ek instance hai aur user teacher ka instance hai so, chai user ka instance hai aisa bol skte 

chai.logMe()
const masalaChai = new User("masalaChai")

masalaChai.logMe()
console.log(chai===Teacher);  // false ,kyunki pura thoda same hai, chai Teacher ka ek instance hai  
console.log(Teacher===User);  //false 
console.log(chai instanceof User);  // True