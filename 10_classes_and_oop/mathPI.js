//Interview Question: Can we change the value of Math.PI (Which itself is a constant) to 3 or 4. Many would say no and the reason for the answer would be that Math.PI being a constant will not allow us to change its value, but a better and more accurate answer is explained with the use of following code:

console.log(Math.PI);
Math.PI = 4;
console.log(Math.PI);
//Here even if we overwrite the value of Math.PI we will get the same value of Math.PI, it wont change.

console.log(Math.ceil(Math.PI)); //The console.log function prints the values to the console but does not change them. The key point here is that Math.ceil(Math.PI) does not change the value of Math.PI; it only uses it to compute the result.

const discriptor = Object.getOwnPropertyDescriptor(Math, "PI"); //Will accept two properties: 1. The object from which we want the property information 2. The actual property for which we want the property description
console.log(discriptor);
/*
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
  --> it is already implemented in core JS that the value of PI in Math is not writable, enumerable and configurable. 
  --> the values are hardcoded in C++ which is the main reason why, whatever we do we cannot change the value of Math.PI.
*/

//Using the above properties for the user defined object:

const aditya = {
  name: "Aditya",
  age: 20,
  isOnline: true,

  orderPlaced: function () {
    console.log("You have placed the order!");
  },
};
console.log(aditya);
//Description for user defined properties:
console.log(Object.getOwnPropertyDescriptor(aditya, "name"));
/*
{
  value: 'Aditya',
  writable: true,
  enumerable: true,
  configurable: true
}
*/

//Defining/ changing properties of the user defined object
Object.defineProperty(aditya, "name", {
  writable: false,
  enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(aditya, "name"));
/*
{
  value: 'Aditya',
  writable: true,
  enumerable: true,
  configurable: true
}
{
  value: 'Aditya',
  writable: false,
  enumerable: false,
  configurable: true
}
*/

//iterating in the object:
for (let [key, value] of Object.entries(aditya)) {
  if (typeof value !== "function") {
    //this is an extra check, it will check whether the value is a function, if it is a function then it will skip it or else will print it
    console.log(`${key} : ${value}`);
  }
}
/*
name : Aditya
age : 20
isOnline : true
*/
