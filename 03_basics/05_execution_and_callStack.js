//Execution Context and Call Stack
/*
 * Execution Context is basically the way in which the code will be executed.
 * Call Stack is how and in which order the functions will be executed.
*/

/******************************JavaScript Execution Context****************************/
/*
-It is the way in which the JS will run/execute the .js file.
-To execute the js file JavaScript runs the file in 2 major phases

-Whenever we try to run any js file, a Global Execution Context is compulsorily made which is refered by this keyword.
The execution context of each environment is different. It will be different for node, deno, bun etc. 
The value for browser execution context is an window object.
Global object differs depending on the execution environment.

//JavaScript works on a single thread. Everything in JS is a separate process.

-> 3 Execution Contexts in JS
1. Global Execution Context
2. Function/ Functional Execution Context
3. Eval Execution Context - Just property of Global Object

-> 2 phases in which the JS code is executed:
1. Memory Creation Phase/ Creation Phase - In this phase, whatever and whichever variables are declared are allocated with some memory.
2. Execution phase - This is the phase where all the logic and operations mentioned in the code are executed.
*/
//Lets understand the above theory with an simple example:
let val1 = 10
let val2 = 5
function addNum(num1, num2){
    let total = num1 + num2;
    return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(23, 2)
/*
Steps in which the above code will be executed:
1. Global Execution/ Global Environment is allocated under this keyword.

2. Memory Creation Phase where all the variables declared in the code are collected and stored in the memory.
With respect to the above example:
val1 and val2 will initialy have undefined stored in them.
Similarly the function addNum will just have the defination of the function
Finally result1 and result2 will also have undefined stored in them.
This is what will happen in the Memory Creation Phase.

3. Execution Phase where all the variables will be appointed all the values given by thee user
With respect to the above example:
val1 <- 10
val2 <- 5
addNum will create a separate Execution Context which itself will have a New Variable Environment + Execution Thread.
    Each time function is executed a separate New Executional Context is created which will again have 2 phases: Memory Phase and Execution Phase.
    For the above example after the function is encountered, 
    The memory phase will have the following content:
    val1 <- undefined
    val2 <- undefined
    total <- undefined

    in the Exection context:
    val1 <- 10
    val2 <- 5
    total <- 10+5 = 15 // This variable is executed and returned to the Global Execution Context

    Finally after the work of this separate Environment is done it is deleted

result1 will have the value <- 15 after the execution is completed
result2 all of the process which was done earlier will be repeated in the exact same way and the value will be stored in the variable
*/

/******************************JavaScript Call Stack****************************/
/*
-JS follows LIFO for managing the CallStack
-Call stack keeps track of the currently executing function and its place in the execution sequence. This sequence is crucial for understanding how JavaScript manages function calls and returns.

To understand how call stack in JS works follow the following steps:
1. Open chrome browser.
2. Inspect
3. Sources
4. Create a new snippet
5. Add the following code
function one(){
    console.log("One") //Breakpoint
    two()
}
function two(){
    console.log("two") //Breakpoint
    three()
}
function three(){
    console.log("three") //Breakpoint
}

one() //Breakpoint
two() //Breakpoint
three() //Breakpoint
6. Add break points as mentioned in the above code
7. Run the snippet and visually observe how the callstack is operating while calling the functions
*/
