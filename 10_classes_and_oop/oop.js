//Object Literals: It is nothing but just literally an Object and nothing else. Way to create objects using curly braces {} to define key-value pairs of properties and methods directly within the code, without needing a class definition.

const user = {
  username: "Aditya",
  "full name": "Aditya Ashok Kachare",
  pwd: "123",
  loginCount: 10,
  //Above are the properties of the object

  getUserDetails: function () {
    console.log("Got user details from the DB");
    //console.log(`Username: ${username}`); //This will give an error as JS dosen't know what or which username is to be accessed as the function also has a separate execution context where the username is not defined. Here we use this keyword
    //The `this` keyword in JavaScript is used to refer to the current object context where a function or method is being executed.
    console.log(`Username: ${this.username}`); //This will give the correct output
    console.log(this); //In the functional context we get the properties of the object in which the function is defined
    /*
    {
        username: 'Aditya',
        'full name': 'Aditya Ashok Kachare',
        pwd: '123',
        loginCount: 10,
        getUserDetails: [Function: getUserDetails]
    }
    */
  },
  //Above is the method for this particular object
};
//Accessing the values: 2 methods - dot notation and square method(discussed in 02_basics/03_objects.js)
console.log(user.username);
console.log(user["full name"]);
console.log(user.getUserDetails());

console.log(this); //In the global context we get empty parenthesis, this in the node environment. If we execute the same in the browser we get the "window" object which is the global context.
//Output: {}

//CONSTRUCTOR FUNCTION:
//const promiseOne = new Promise();
//const date = new Date();
//Here the new keyword is actually the constructor function. This allows to create multiple instances from a single object. The "new" keyword is used to make a new context.

function User(username, loginCount, isLoggedIn) {
  this.username = username; //The one on the left is our variable, and the right handside "username" is the value which is being passed.
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  //we can also use functions:
  this.greetings = function(){
    console.log(`Username: ${this.username}`);
  }

  return this;
}

const userOne = User("Aditya", 12, false);
const userTwo = User("Aman", 2, false); //This will overwrite everything
console.log(userOne); //In the code `const userOne = User("Aditya", 12, false)`, calling `User` without `new` makes `this` refer to the global object. Therefore, properties like `username`, `loginCount`, and `isLoggedIn` are added to the global object, appearing alongside other global properties when you log `userOne`.

//To avoid the issue of overwriting of data we will make use of the constructor function, which gives us a new instance everytime. Original or other instances won't be affected by using the constructor function. To achieve this we simply make use of the "new" keyword as demonstrated below:
const userThree = new User("Pranay", 10, true);
console.log(userThree); //Making use of the constructor also eleminates the extra unwanted properties and the output will simply look like: "User { username: 'Pranay', loginCount: 10, isLoggedIn: true }"

//NOTE: Steps:
/*
1. As soon as we use the "new" keyword an empty object/instance is created.
2. The construtor function is called because of the "new" keyword. This is reponsible for giving us all the arguments.
3. All the arguments are injected in the ".this" keyword
4. Finally we have the access to all the arguments.
*/

//"constructor" keyword
const userFour = new User("Aryan", 4, true)
console.log(userFour.constructor); //[Function: User] it is basically just a reference about itself