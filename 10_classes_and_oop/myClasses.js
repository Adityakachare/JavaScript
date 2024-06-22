// ES6 version support

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  } //will be called as soon as the class objeect is initialized(use of new keyword)

  encryptPassword() {
    return `${this.password}abc`;
  }

  changeCase() {
    return `${this.username.toUpperCase()}`;
  }
}

const aditya = new User("Aditya", "aditya@gmail.com", "123");
console.log(aditya.encryptPassword());
console.log(aditya.changeCase());

//BEHIND THE SCENE of classes in JS
function User1(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User1.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};
User1.prototype.changeCase = function () {
  return `${this.password}abc`;
};
const aman = new User1("Aman", "aman@gmail.com", "123");
console.log(aditya.encryptPassword());
console.log(aditya.changeCase());
