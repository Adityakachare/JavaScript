function multiply(num) {
  return num * 5;
}

multiply.power = 19;

console.log(multiply(3)); // 15
console.log(multiply.power); // 19
console.log(multiply.prototype); //{}

//As function itself can behave like an Object in JS, we can also inject extra functionalities. Like for example for arrays we get the functionalities like splice, map, slice etc.
//Object has properties, and one of the property may hold the function which will describe the functionality.

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.increment = function () {
  this.score++;
  //Here this keyword plays an important role as it defines the current context due to which whichever function call we get the increment will perform the operation of that call only.
};

createUser.prototype.printMe = function () {
  console.log(`Score is ${this.score}`);
};

const player1 = createUser("Aditya", 100);

//player1.printMe(); //We surely have injected all the properties, but we will need to explicitly tell that we have new properties, this will be done by "new" keyword.

const player2 = new createUser("Aman", 90);
player2.printMe(); //Score is 90

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
