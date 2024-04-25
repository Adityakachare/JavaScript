/*
I.Primitive
1. String 
2. Number
3. Boolean
4. null
5. undefined
6. symbol - used to make any component/variable unique
Syntax to define symbol: const id = Symbol('123')
7. BigInt - All the larger values or the scientific values are covered in BigInt

II. Reference Type/Non Primitive
1. Arrays
2. Objects
3. Functions

JavaScript is a dynamically typed language: we don't need to explicitly mention what datatype a variable has to be, the language understands the datatype of the variable according to the value stored in it.
*/

const id = Symbol('123')
const id2 = Symbol('123')

console.log(id === id2); //false
console.log(id); //Symbol(123)
console.log(id2); //Symbol(123)
//We may have same values in two variables with Symbol as a datatype, but as the properties of the datatype it won't return the same value as we pass it 

const arrayExample = ["Aditya", "Aryan", "Akash"]

let myObj = {
    name :"Aditya",
    age: 21
}

const myFunction = function(){
    console.log("This is a function")
}


/**********************MEMORY MANAGEMENT***************************/
// 2 types: Stack(Primitive) and Heap(Non-Primitive)