const User = {
    _email: 'h@hc.com',
    _password: "abc",  // basicaly _ matlab private property hai bol skte hai


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);