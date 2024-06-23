//Getters and Setter using OBJECT syntax:
const User = {
  _email: "aditya@gmail.com",
  _password: "askj",

  get email() {
    return this._email.toUpperCase();
  },
  set email(value) {
    this._email = value;
  },
};

const aditya = Object.create(User);
console.log(aditya.email); //We have not defined email field in the object but we get the value of email through this line of code
