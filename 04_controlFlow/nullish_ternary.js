
//NULLISH COALESCING OPERATOR (??): for null and undefined
//The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
//There may be some chances where the database returns two values where one of the value is null or undefined and so the variable will be assigned the null or undefined value or the actual value that is passed(the value on the right side)
//This operator basically does a safety check for null value as it may have some issues in the program.
let val1 = 5 ?? 10;
console.log(`Val1:${val1}`); //Val1:5

let val2 = null ?? 10; 
//in real life the right-hand side operand is not a single value rather it is a complex function which has some important operations like calling some value from the database and if we get the value then it is assigned to the variable or else simply the null value is assigned to the variable.
console.log(`Val2:${val2}`); //Val2:10

let val3 = undefined ?? 10;
console.log(`Val3:${val3}`); //Val3:10

let val4 = null ?? 10 ?? 15;
console.log(`Val4:${val4}`); //Val4:10 // Basically it will return the first value that it gets



//TERNARY OPERATOR
//condition ? true : false
const price = 100
price > 200 ? console.log("Price is greater than 200") : console.log("Price is lesser than 200");