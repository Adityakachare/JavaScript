const uName = "Aditya"
const rCount = 100

// console.log(name+rCount+" value"); //This method can be used but is not recommended
// A better way to use Strings is by String Interpolation using backticks:

console.log(`My name is ${uName} and the count is ${rCount}`);

//Another way to define a String:
const bName = new String('Harsh-GC-YT')
console.log(bName)
/*
This code will return the type of the variable as Object and the output of would be like:
String {'Harsh'}
0: "H"
1: "a"
2: "r"
3: "s"
4: "h"
length: 5
[[Prototype]]: String
[[PrimitiveValue]]: "Harsh"

#The prototype object itself has multiple methods in it such as charCodeAt, endsWith, concat, length, replace and many more
*/
//To print the characters of the string:
console.log(bName[3]);
console.log(bName.toUpperCase());
console.log(bName.charAt(4));
console.log(bName.indexOf('H'));

const newString = bName.substring(2,4)
console.log(newString)

const newString1 = bName.slice(-6, 3)
console.log(newString1)

const newString2 = "   Aditya cha Namaskar     "
console.log(newString2.trim())
console.log(newString2)

const url = "https://aditya%20kachare.com"
console.log(url.replace('%20','-'));

console.log(url.includes('aditya'))

console.log(bName.split('-')); //to convert from String -> Array on the basis of '-'
