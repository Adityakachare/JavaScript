function User(email, password) {
  this._email = email;
  this._password = password;

  Object.defineProperty(this, "email", {
    get: function () {
      return this._email.toUpperCase();
    },
    set: function (value) {
      this._email = value;
    },
  });
  Object.defineProperty(this, "password", {
    get: function () {
      return this._password.toUpperCase();
    },
    set: function (value) {
      this._password = value;
    },
  });
}
//This code defines a `User` constructor function that initializes `_email` and `_password` properties for an object. It uses `Object.defineProperty` to create a getter and setter for the `email` property. The getter returns the `_email` value in uppercase, while the setter assigns a new value to `_email`. This setup allows controlled access and modification of the `email` property, ensuring the internal `_email` value is always used.
const user = new User("Aditya@gmail.com", "aditya")
console.log(user.email);