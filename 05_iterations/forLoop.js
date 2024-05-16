//For Loop
/*
Three parts in for loop parenthesis:
1. Variable declaration/ initialization
2. Condition check
3. Increment/Decrement

The loop enters the body before incrementing/decrementing the value. Once the code inside the body is executed the increment or decrement is performed
*/

for (let i = 0; i < 10; i++) {
    const element = i;
    console.log(element);
    /*
    0
    1
    2
    3
    4
    5
    6
    7
    8
    9
    */
}
/*
This is what is happening in the above loop:
index variable is declared with 0, the condition is checked, if the condition is true then only the control we enter the body. After the code in the body is executed the control goes to the increment/decrement part, after that it again checks the condition. 
The control will not go to the declaration/ initialization part again. Once declaration is done it is not changed
The control will come out of the loop only when the condition is false.
*/

//console.log(element); //Will give an error as the variable is not accessible outside the block scope of the for loop

//For loop with if
for (let index = 0; index < 10; index++) {
    const element = index
    if(element == 5){
        console.log("FIVE");
    }
    console.log(element);   
}

//Nested For loop
for (let i = 0; i <= 10 ; i++) {
    console.log(`Outer Loop: ${i}`);
    for (let j = 0; j <= 10; j++) {    
        console.log(`Outer Loop: ${j} and Inner Loop ${i}`);
    } 
}
//The output represents nested loops where the outer loop iterates from 0 to 10 and the inner loop iterates from 0 to 10 for each iteration of the outer loop, printing the values of both loop indices for each iteration.

//Multiplication Tables from 0 to 10
for (let i = 0; i <= 10 ; i++) {
    console.log(`Outer Loop: ${i}`);
    for (let j = 0; j <= 10; j++) {    
        console.log(`${i} * ${j} = ${i*j}`);
    } 
}
//This code demonstrates nested loops where the outer loop iterates from 0 to 10, and the inner loop iterates from 0 to 10 for each iteration of the outer loop. Within each iteration, it calculates the product of the outer loop index (i) and the inner loop index (j), printing the result in the format i * j = i*j.

//for loop and arrays
let myArray = ["SpiderMan", "IronMan", "BatMan"]
//for (let index = 0; index <= myArray.length; index++) This statement is wrong as the <= will give an extra value as undefined
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}
/*
SpiderMan
IronMan
BatMan
*/

//Important Keywords: break and continue
for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(`Detected 5`);
        break;
    }
    console.log(`Value of i is ${index}`); 
}
//break statement is used to break the control flow of the code. In the above example as soon as the control encounters the number 5 it will break the loop and the control will come out of the loop.
for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(`Detected 5`);
        continue;
    }
    console.log(`Value of i is ${index}`); 
}
//continue will basically skip that particular iteration and the further execution will run normally