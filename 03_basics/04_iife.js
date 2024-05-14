//IIFE stands for Immediately Invoked Function Expression
/*
What is IIFE?
IIFE basically is a function which is executed as soon as it is declared.
Why we need IIFE?
For an instance we have a simple file which has the database connection, so as soon as the application starts we want to execute that particular file. This is where IIFE is used.
Second most important use of IIFE is to avoid the Global Scope Pollution. Global Scope Pollution is a common problem in JS, it occurs when there are too many variable and function declaration in the global scope of the program. This leads to potential name conflicts. So IIFE helps to encapsulate the variables and functions within its own separate scope, preventing them from polluting the global scope and avoiding name conflicts.
*/
//Declaring an IIFE is pretty easy:
//()() --> this is the declaration of an IIFE, where the first parenthesis represents the funtion which has all the code or logic and the next set of brackets is the invokation part of the IIFE
//Example:
(function printHello(){
    console.log("Hello");
})();

//When we have more than one IIFE in the same code then we need to add the termination operator(;) explicitly after invoking the function without which we will get an error

//IIFE using arrow function
(() => {
    console.log("Hello world!");
})();

//Parameters and arguments in an IIFE
((name) => {
    console.log(`Hello ${name}`);
})("Aditya")

//Named IIFE is just an IIFE with a normal function which has a name.
//Unnamed if is simply an IIFE created with an Arrow Function due to which it simply dosen't have a name.
//Both the IIFEs work similary without any major difference.
//If we want to write more than 1 IIFE, use the semicolon/terminator operator