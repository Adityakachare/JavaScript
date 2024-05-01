const score = 100
console.log(score) //100

const balance = new Number(300) //deliberately declare as Number
console.log(balance) // [Number: 300]

console.log(typeof(balance.toString())) //string
console.log(balance.toString().length) //3
console.log(balance.toFixed(2)) //we need to give a property in the method //300.00  

const newNum = 325.3493
console.log(newNum.toPrecision(5));
console.log(newNum.toPrecision(8));
//If we give the precision value greater than the number itself the answer will have an extra 0 in it
console.log(newNum.toPrecision(1));
//If the precision value is significantly small then the answer will have that number of digits and the futher digits will be returned in exponential form

const a = 10000000
console.log(a.toLocaleString()); //10,000,000 //returns the long numbers along with commas to make the number readable but this method returns the number according to the US standards
console.log(a.toLocaleString('en-IN')); //1,00,00,000 //will return the number according to the Indian Standards

/*********************** MATHS *****************/
console.log(Math);
console.log(Math.abs(-2));
console.log(Math.round(21.09));
console.log(Math.ceil(21.02));
console.log(Math.floor(21.9));
console.log(Math.min(2,1,9));
console.log(Math.max(2,1,9));

//Math.Random
console.log(Math.random());
console.log((Math.random()*10)+1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min) 
/*
This statement generates a random integer between a minimum (`min`) and maximum (`max`) value, both inclusive. 

Here's a breakdown:

- `Math.random()`: Generates a random floating-point number between 0 (inclusive) and 1 (exclusive).
- `(max - min + 1)`: Calculates the range of possible values.
- `Math.floor()`: Rounds down the result to the nearest whole number.
- `+ min`: Shifts the range to start from the minimum value and avoid 0 case
 */