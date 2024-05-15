//Truthy and Falsy values is an interesting concept in JS. These values are assumed to be true or false without comparing them with any other value
//Example: Assume that we receive an email from the database and we want to print some message if the value/email is received or not, in this case we dont have to compare the value with anything else so the code will be like:
const userMail = "aditya@gmail.com"
if(userMail){
    console.log("User Email present");
}else{
    console.log("User Email not present");
}
//This will print "User Email present". If you carefully observe, in the if statement we are not comparing the variable with anything else. It is assumed that the value is true and the respective message is printed.

//Predermined Falsy Values: false, 0, -0, BigInt 0n, "", null, undefined, NaN
//Predermined Truthy Values: All other values are truthy values: "0", 'false', " ", {}, [], function(){}

//To check an empty array: an empty array is a truthy value but while checking it using if statement we want some different output, so the alternative is to use some predefined functions like length
const users = []
console.log(users.length);
if(users.length){ // this will be a false value as the length of the array is 0
    console.log("There are users");
}else{
    console.log("There are no users")
}
//Output: There are no users
const users1 = [1, 2, 3, 4, 5]
console.log(users1.length);
if(users1.length){ // this will be a true value as the length of the array is 5
    console.log("There are users");
}else{
    console.log("There are no users")
}
//Output: There are users

//To check empty objects:
const emptyObj = {

}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}else{
    console.log("Object is not empty");
}


const Obj = {
    name: "Aditya",
    rollNo: 123,
    address: "Thane"
}

console.log(Object.keys(Obj)); 
//Returns an array of keys in the object 
//[ 'name', 'rollNo', 'address' ]

if(Object.keys(Obj).length === 0){
    console.log("Object is empty");
}else{
    console.log("Object is not empty");
}

console.log(false == 0); //true
console.log(false == ''); //true
console.log(0 == ''); //true