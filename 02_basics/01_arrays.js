//JavaScript arrays are resizable
//Can have mixed datatype(String, number, objects...etc)
//Arrays are zero-indexed

//JavaScript array-copy-operations create SHALLOW COPIES

/* 
SHALLOW COPIES: A shallow copy of an object is a copy whose properties share the same references as those of the source object from which the copy was made.

DEEP COPIES: A deep copy of an object is a copy whose properties do not share the same reference as those of the source object from which the copy was made.

Deep copies create entirely new objects, ensuring that changes to the copy do not affect the original object, while shallow copies retain references to the original object's properties, meaning changes to nested objects in the copy will affect the original.
*/
const myArray = [0, 1, 2, 3, 4, 5]
const myHeros = ["IronMan", "SpiderMan", "CaptainAmerica"]
const myArr = new Array(1, 2, 3)
console.log(myArray[1]);

//Array Methods
// myArray.push(6)
// myArray.push(7)
// console.log(myArray);
// myArray.pop()
// console.log(myArray);

myArray.unshift(9) //This method in Arrays adds one or more elements in the array
console.log(myArray);
/*[
    9, 0, 1, 2,
    3, 4, 5
]*/

myArray.shift() //This method in Arrays removes first element from the array
console.log("op",myArray); //[ 0, 1, 2, 3, 4, 5 ]

console.log(myArray.includes(8)); //Will check if the array has the particular element in it
console.log(myArray.indexOf(3)); //Will return the index of the specified number

const newArray1 = myArray.join();
console.log(myArray);
console.log(typeof newArray1); //join will make the array in string

//SLICE and SPLICE
console.log("A ", myArray);
const myArray1 = myArray.slice(1, 3)
console.log(myArray1);
console.log("B ", myArray);

const myArray2 = myArray.splice(1, 3)
console.log("C ", myArray);
console.log(myArray2);
/*
Slice method will return the subset of the array according to the parameters given in the parenthesis. It won't consider the element at the 2nd parameter. It is exclusive
On the other hand the Splice method is inclusive and will consider the element at the 2nd parameter.

BUT the major difference between slice and splice is that SPLICE manipulates the original array where as slice dosen't
*/

