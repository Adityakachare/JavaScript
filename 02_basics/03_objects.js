// Singleton: instantiated only once, ensuring that there is only a single instance of that object throughout the application.
//singleton objects are made using constructors
//If the object is made using literals then Singleton object is not made
//The constructor method used to make the object is as follows:
//Object.create

//Object literals
const JsUser = {
    name:"Aditya",
    "full name": "Aditya Ashok Kachare",
    age: 21,
    location: "Thane",
    email: "aditya@gmail.com",
    isLoggedIn: true,
    lastLogin: ["Monday", "Wednesday"]
}

//Traditional way to access the object elements, this method is not wrong but also not advisable
console.log(JsUser.email); //aditya@gmail.com
//This may work but if the key in the object is having a string value then there is no way we can access the elements from the object

//The following method can be used to counter the above issue
console.log(JsUser["full name"]) //Aditya Ashok Kachare


//Using SYMBOL dataype as a key in the Object:
const mySym = Symbol("Key1")

const JsUser1 = {
    name: "Mark",
    mySym: "Symbol 1",
    age: 21,
    location: "Thane",
    email: "aditya@gmail.com",
    isLoggedIn: true,
    lastLogin: ["Monday", "Wednesday"]
}
console.log(JsUser1.mySym); //This statement may give the correct output but actually it is not. It is printing the symbol value as a String rather the Symbol Datatype itself
console.log(typeof JsUser1.mySym); //string
// SO finally the correct way to define a symbol is by using a square bracket around it

const JsUser2 = {
    [mySym]:"Symbol1"
}
//And to access the same we need to use the following method
console.log(JsUser2[mySym])

//How to change/update/overwrite the values from the object
JsUser.email = "aditya@yahoo.com"

//Freezing the values so no one can change the content:
Object.freeze(JsUser)
JsUser.email = "aditya@microsoft.com"
console.log(JsUser);

JsUser1.greeting = function(){
    console.log("Hello world");
}
console.log(JsUser1.greeting); //[Function (anonymous)]
console.log(JsUser1.greeting()); //Hello World

JsUser1.greeting2 = function(){
    console.log(`Hello your username is: ${this.name}`); //this keyword is used for refering to the object values/properties
}
console.log(JsUser1.greeting2());