/******************** CONVERSION **************************/

// let score = "33a"

// console.log(typeof score);

// let valueInNumber = Number(score)

// console.log(typeof valueInNumber);
// console.log(valueInNumber);



// let score = null

// console.log(typeof score);

// let valueInNumber = Number(score)

// console.log(typeof valueInNumber);
// console.log(valueInNumber);



// let score = undefined

// console.log(typeof score);

// let valueInNumber = Number(score)

// console.log(typeof valueInNumber);
// console.log(valueInNumber);



// let score = true

// console.log(typeof score);

// let valueInNumber = Number(score)

// console.log(typeof valueInNumber);
// console.log(valueInNumber);


//"33" => 33
//"33abc" => NaN(not a number) typeof NaN is number
//true => 1; false =>0

// let isLoggedIn = 9
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);
// 1 => true; 0 => false (any number other than 0 will be true)
// "" => false; "<any word/string>" => true

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