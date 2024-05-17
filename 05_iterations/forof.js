//Loops dicussed in this file are array and objects specific
//Normal array with strings: ["", "", ""]
//Array with objects inside it: [{}, {}, {}]
//Arrays, Strings, Objects: all these are iteratable
//For of loop
/*
 for (const iterator of object) { //Here iterator is the variable which will help to iterate through the object. In this loop object is not the actual JS object it simply means on what data you want to iterate.
    
 }
*/

//For of loop with arrays:
const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(num);
}
//Output:
/*
1
2
3
4
5
*/

//For of loop with Strings:
const str1 = "Aditya"
for (const index of str1) {
    console.log(str1);
    console.log(`Each char is: ${index}`);
}
//Output:
/*
Aditya
Each char is: A
Aditya
Each char is: d
Aditya
Each char is: i
Aditya
Each char is: t
Aditya
Each char is: y
Aditya
Each char is: a
*/

//MAPS
/*
Map is an object that stores key-value pairs and it remembers the order in which the insertion of keys is done.
Map does not allow duplicate values
All values are unique
*/

const map1 = new Map() //Declaration of map1 as a MAP
//      (KEY    VALUE )
map1.set("IN", "India")
map1.set("USA", "United States of America")
map1.set("NP", "Nepal")
//map1.set("IN", "India") This wont give any error but these values wont be recorded either as MAP stores unique values only, and also maintains the order in which the values are stored

console.log(map1);
//OUTPUT
/*
Map(3) {
  'IN' => 'India',
  'USA' => 'United States of America',
  'NP' => 'Nepal'
}
*/

//for of loop on MAP

for (const key of map1) {
    console.log(key);
}
//OUTPUT
/*
[ 'IN', 'India' ]
[ 'USA', 'United States of America' ]
[ 'NP', 'Nepal' ]
*/

for (const [key, value] of map1) { //we have destructured the array 
    console.log(key ,":-", value )
}
//OUTPUT
/*
IN :- India
USA :- United States of America
NP :- Nepal
*/

//For of loop on Object:
/*
const obj1 = {
    "game1": "GTA5",
    "game2": "RDR2"
}
for (const [key, value] of obj1) {
    console.log(key);
}
*/
//This will give an error as "obj1 is not iterable" 