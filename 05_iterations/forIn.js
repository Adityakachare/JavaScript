//FOR IN LOOP

const obj1 = {
    js: "JavaScript",
    cpp: "C++",
    rb: "Ruby",
    swift: "SwiftByApple"
}

for (const key in obj1) {
    console.log(key);
}
/*
js
cpp
rb
swift
*/
for (const key in obj1) {
    console.log(obj1[key]);
}
/*
JavaScript
C++
Ruby
SwiftByApple
*/


for (const key in obj1) {
    console.log(`${key} is a shortform for: ${obj1[key]}`);
}
/*
js is a shortform for: JavaScript
cpp is a shortform for: C++
rb is a shortform for: Ruby
swift is a shortform for: SwiftByApple
*/

//for in loop for Arrays:
const prog = ["js", "rb", "py", "cpp", "java"]
for (const key in prog) {
    console.log(key);
}
/*
0
1
2
3
4

Array keys start from 0. It is similar to objects. Just the difference being that objects have user defined keys whereas Arrays have already initialized keys which start from 0.
*/
for (const key in prog) {
    console.log(prog[key]);
}
/*
js
rb
py
cpp
java
*/

//For in on MAP
const map1 = new Map() 
map1.set("IN", "India")
map1.set("USA", "United States of America")
map1.set("NP", "Nepal")
for (const key in map1) {
    console.log("KEY",key);
}
//This wont give any output as MAP is not iteratable