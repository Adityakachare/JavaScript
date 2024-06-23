//GETTERS and SETTERS:
//In some scenarios we may want to send the values like passwords in encrypted format. There may be some properties in the class for which we need to give restricted access. To do so GETTERS and SETTERS are used.
//By default every class has getters and setters. We can apply getters and setters on any property or variables of the class.
//Getters and Setters are automatically set as a method for all the variables/properties of the class.
//If the getter is set then the setter needs to be set compulsorily.
//To get any value from outside the class, getter is used.
//To set any any value inside the class, setter is used.

//If we try to explicitly get and set the value of some variable then we will encounter an error as: "Maximum call stack size exceeded". This is because both, the constructor and getter/setter are trying to give the values to the same variable, to avoid this we can try to change the name of the variable in the getter/setter which means we are completely creating a new variable and over writing the values of the constructor.
//As we can observe we have given the name as "_password" to the variable in the getter/setter
//While we are getting the password we are returning it with some encryption and then directly setting the value as it is.
/*Note: 
The name of the getter/setter should be the same as the name of the property.
Getter always returns something(even empty is allowed)
Setters will only set the values
*/
class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }

  get password() {
    return `${this._password}pwd`;
  }

  set password(value) {
    this._password = value;
  }
}

const aditya = new User("aditya@gmail.com", "abc");
console.log(aditya.password);
