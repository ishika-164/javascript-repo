class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}
console.log(User.createId());  // output : 123

const hitesh = new User("hitesh")
 //console.log(hitesh.createId())   // error

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.logMe());

//console.log(iphone.createId());  // aap extend kro ya usko call kro static vala ek hi ke liye hai  