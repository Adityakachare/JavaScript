//Understanding Prototype:

//Our goal is to make a method called as trueLength which will return the length of a string after triming the extra white spaces. We can simply do this using the trim and length functions but for the sake of understanding the concept of prototype we will make a user defined function.
let myName = "Aditya    ";
console.log(myName.length); //10
console.log(myName.trim().length); //6

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "lightning",
  spiderman: "spidy web",

  getSpidermanPower: function () {
    console.log(`Spidy power is: ${this.spiderman}`);
  },
};

//Using factory functions to inject extra properties in the object itself: create
Object.prototype.aditya = function () {
  console.log("All objects contain Aditya");
};

//Everything(arrays, strings, objects) will have this new property of "aditya" as we have injected it in the Object directly
heroPower.aditya();
myHeros.aditya();

//Now we will check that if we give the property to only the array, will it pass to the object which can be said that is the upper layer:
Array.prototype.heyAditya = function () {
  console.log("Injected the value of HeyAditya in the array");
};

myHeros.heyAditya(); //Successfull
//heroPower.heyAditya(); //Will give an error: "heroPower.heyAditya is not a function" as we have given the property to the array and not the object

//INHERITANCE:
//Every object has its separate instance, the objects dont share any properties, the default properties are the same but the properties that we create are not shared across all the objects.

//But we can do this using the "__proto__" keyword. The following code will show how it is used, This syntax is OUTDATED

const user = {
  name: "Aditya",
  email: "aditya@google.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS Tutorial",
  fullTime: true,
  __proto__: TeachingSupport, //Borrowing properties of TeachingSupport
};
//One more way outside the object:
Teacher.__proto__ = user; //"Teacher" Accessing all properties of "user"

//Modern Syntax:
Object.setPrototypeOf(TeachingSupport, Teacher); //This exaclty works similar to how __proto__ works, just a syntactical Sugar

//Now for solving the main problem that we had in the start of the file(making a default trueLength() method):
let anotherUsername = "Aditya Ashok Kachare    ";

String.prototype.trueLength = function () {
  console.log(`${this}`); //This will give us the name as "anotherUsername" has the reference of "Aditya Ashok Kachare"
  console.log(`True length of the string is: ${this.trim().length}`);
};
anotherUsername.trueLength();

//We can also call the property directly without actually declaring the values of strings in any variables:
"Aditya".trueLength();
"JavaScript   ".trueLength();
/*
Aditya
True length of the string is: 6
JavaScript   
True length of the string is: 10
*/
