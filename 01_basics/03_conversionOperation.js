/******************** CONVERSION **************************/

let score = "33a"

console.log(typeof score); //string

let valueInNumber = Number(score)

console.log(typeof valueInNumber); //number
console.log(valueInNumber); //Nan



let score1 = null
console.log(typeof score1); //object

let valueInNumber1 = Number(score1)

console.log(typeof valueInNumber1); //number
console.log(valueInNumber1); //0


let score2 = undefined
console.log("Type of score2 is:",typeof score2); //undefined

// let valueInNumber = Number(score)

// console.log(typeof valueInNumber);
// console.log(valueInNumber);



let score3 = true
console.log(typeof score3); //boolean

let valueInNumber2 = Number(score)

console.log(typeof valueInNumber2); //number
console.log(valueInNumber2); //Nan


//"33" => 33
//"33abc" => NaN(not a number) typeof NaN is number
//true => 1; false =>0

let isLoggedIn = 9
console.log(typeof isLoggedIn); //number
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
//1 => true; 0 => false (any number other than 0 will be true)
//"" => false; "<any word/string>" => true

// let stringV = 33
// let convertedString = String(stringV)
// console.log(convertedString);
// console.log(typeof convertedString);


/******************** OPERATIONS **************************/
let value = 3
let negValue = -value
//console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/3);
// console.log(2%3);




/*console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log(typeof ("1" + 2 + 2)); //122 => string
console.log(typeof (1 + 2 + "2")); //32 => string*/
// According to the JavaScript's type coercion rules, which are based on the ECMAScript specification, when a string is encountered first during an arithmetic addition in an expression, the expression is evaluated as a string
//on the other hand if a string value is encountered after some int values, the addition of the int value takes place and further the concatenation of the int and string


/* console.log(+true); //1
console.log(+false); //0
console.log(+""); //0 */