const marvelHeros = ["Thor", "IronMan", "SpiderMan"]
const dcHeros = ["Batman", "Superman", "Flash"]

marvelHeros.push(dcHeros)
console.log(marvelHeros); 
/*
[ 'Thor', 'IronMan', 'SpiderMan', [ 'Batman', 'Superman', 'Flash' ] ] - array inside array 
    1         2          3                          4
*/
console.log(marvelHeros[3]); //[ 'Batman', 'Superman', 'Flash' ]
console.log(marvelHeros[3][1]); // Superman

const allHeros = marvelHeros.concat(dcHeros)
console.log(allHeros); //[ 'Thor', 'IronMan', 'SpiderMan', 'Batman', 'Superman', 'Flash' ]

/*
PUSH method adds the elements in the existing array itself
whereas
CONCAT method add the elements and returns a new array with the added elements
*/

const allNewHeros = [...marvelHeros, ...dcHeros] 
console.log(allNewHeros); 
console.log(typeof allNewHeros); //object
/*
SPREAD OPERATOR(...)
the array elements become individual elements therefore when the two arrays are passed along with a comma the elements of each array are printed which is similar to the concat operator.

The advantage of SPREAD operator over concat and push is that we can pass more than two arrays in it which will be joined together, following is the example:
*/
const IndianHeros = ["Shaktiman", "Naagraj", "Minnal Murali"]
const allNewHeros1 = [...marvelHeros, ...dcHeros, ...IndianHeros]
console.log(allNewHeros1);
/**
[
  'Thor',
  'IronMan',
  'SpiderMan',
  'Batman',
  'Superman',
  'Flash',
  'Shaktiman',
  'Naagraj',
  'Minnal Murali'
]
*/


/*
The flat() method, when called with Infinity, recursively flattens nested arrays to the specified depth, or until all nested arrays are flattened into a single-level array.

We need to pass the depth till which we need to flatten the array 
In realAnotherArray1 we have flattened the array till 1 depth therefore in the output the array in array is not resolved/flattened
If we don't know the depth till which we need to flatten it we can simply pass "Infinity"
*/
const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const realAnotherArray = anotherArray.flat(Infinity)
const realAnotherArray1 = anotherArray.flat(1)
console.log(realAnotherArray);
/*
[
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
]
*/
console.log(realAnotherArray1); //[ 1, 2, 3, 4, 5, 6, 7, 6, 7, [ 4, 5 ] ]

console.log(Array.isArray("Aditya")) //False
console.log(Array.from("Aditya")) //[ 'A', 'd', 'i', 't', 'y', 'a' ]
console.log(Array.from({name:"Aditya", age: 21, DOB: "27th Feb, 2003"})) // will return an empty array as we need to specify on what basis the array is to be made, if the function is not able to understand it, it will always return an empty string
const aditya = {name:"Aditya", age: 21, DOB: "27th Feb, 2003"} 
const resultArray = Array.from(Object.keys(aditya));
console.log(resultArray); //['name', 'age', 'DOB']

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))