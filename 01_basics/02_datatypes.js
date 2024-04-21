"use strict";//Treat all code as new version

// alert(3+3)
/* We are using the Node.js runtime environment, which is why this syntax with 'alert' cannot be used. The 'alert' function is typically associated with web browsers and is used to display dialog boxes, which is not applicable in Node.js. This syntax may work in web browsers like Chrome, which use the V8 JavaScript engine. */

let name = "Aditya"
let age = 21
let isLoggedIn = true
/*
DATATYPES in JS
1. number => 2 to power 53
2. bigint
3. string => ""
4. boolean => true/false
5. null => standalone value(it basically is a special value that represents nothing or absence of a value)
6. undefined => if value is not defined to a particular variable
Null and undefined are two different things -> null is actually a value, while undefined is something that occurs when you don't assign a value to a particular variable. 
For example, if there is an API that fetches the temperature of a place and for some reason, the temperature is not available, we would prefer the value null rather than 0°C. 
On the other hand, if you declare a variable to hold the temperature data (let temperature;) but haven't received the data yet, the value of that variable would be undefined until it's assigned a value.
7. symbol => used to identify a unique component(used by Figma to define an individual component)
8. object
*/

console.log(typeof undefined); //undefined
console.log(typeof null); //object