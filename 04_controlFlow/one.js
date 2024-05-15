//Control flow: Whenever we run a particular code, the whole code is never executed, there is a particular flow in which it is to be executed. For example: if an user logs in, the code associated with login functionality should be executed. This concept is called as Control flow or Logic Flow.
//Control/Logic flow in JS is implemented using the following concepts:

/* 1. If */
/*
The code in the scope will execute only if the condition is true
We can also directly mention true in the () if we want or add any type of comparison 
Comparison Operators used: <, >, <=, >=, ==, !=, ===, !==
= is assignment operator whereas == is used to check whether the two values are equal. 
On the other hand === (Strict equal) will check for equality as well as the type of the two operands
if(condition){
    
}
*/
if(2 == "2"){
    console.log("Equal"); //Equal is the output
}

if(2 === "2"){
    console.log("Equal"); //No output as the first operand is of number type and the second operand is of String datatype
}

/* 2. If else */
const temp = 41
if(temp < 50){
    console.log("Temperature is less than 50");
}
else{
    console.log("Temperature is greater than 50");
}

//Block scope in if else:
const score = 200
if(score>100){
    var power = "Speed" //Using var is not recommended as it has global scope and may affect the code in long term
    let power1 = "fly"
    console.log(`User power: ${power}`);
    console.log(`User power: ${power1}`);
}
console.log(`User power: ${power}`);
// console.log(`User power: ${power1}`); //This line will give an error due to the block scope of let keyword

//Shorthand Notation:
const balance = 500
if(balance > 100) console.log("Test"); 
//This has an implicit scope, we need to add a termination operator after writing the body of the if condition
if(balance > 100) console.log("Test2"), console.log("Test3"); 
//This is how we can write multiple statements using the shorthand notation but this type of coding practice is highly discouraged as it reduces the code readability. This code will definitely work but is not recommended.

//Nesting in "if"
const balance1 = 1000
if(balance1 < 500){
    console.log("Less than 500");
} else if(balance1 < 750){
    console.log("Less than 750");
} else if(balance1 < 900){
    console.log("Less than 900");
} else{
    console.log("Less than 1200");
}

//&& and ||
const userLoggedIn = true
const debitCard = true
const googleLogIn = false
const emailLogIn = true

if(userLoggedIn && debitCard){ //will check is user is logged in AND user has a debit card
    console.log("Allowed to purchase");
}
if(googleLogIn || emailLogIn){ //Will check if user has google OR email log in
    console.log("Allowed to purchase");
}

