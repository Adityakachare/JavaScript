// console.log(2>1)
// console.log(2>=1)
// console.log(2<1)
// console.log(2==1)
// console.log(2!=1)

console.log("2a" > 1); //false
console.log("02" > 1); //true
//JavaScript automatically converts strings to numbers when comparing them with numbers using comparison operators like ">" (greater than), allowing for numerical comparison even when the operands are initially strings.

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); //true
/* 
The reason for this behaviour is: An equality check == and comparisons > < >= <= words differently.
Comparisons convert null to a number, treating it as 0. That is why 
null >= 0 is true 
and 
null > 0 is false
*/

console.log(undefined > 0); // false
console.log(undefined == 0); // false
console.log(undefined >= 0); //false

//Strict Check: strict equality check (===) compares both value and type without type coercion.
console.log("2" === 2);

