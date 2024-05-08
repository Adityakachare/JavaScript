// Function is basically used to wrap multiple lines of code in parenthesis so that it can be used whenever and wherever we want according to the user convenience

//Function Defination
function func1(){
    console.log("A");
    console.log("D");
    console.log("I");
    console.log("T");
    console.log("Y");
    console.log("A");
}
func1 //This is called the reference of the function
func1() // By adding the parenthesis we can execute the funtion

//When we define a function, any input we take while the definition it is called as parameters
//When we call any funtion, the values passed in the parenthesis are called as arguments
function addTwoNumbers(num1, num2){
    console.log(num1 + num2)
}
addTwoNumbers(2,5) //7
const result = addTwoNumbers(1, 4); //5
console.log("Result is: ", result); //Result is:  undefined //The output is undefined as the funtion is just printing the value that is passed to it and not returning any value

function addTwoNumbers1(num1, num2){
    let add = num1 + num2;
    return add;

    //return num1+num2
    console.log("Aditya");// Unreachable code, anything written inside the funtion after the return statement is not executed
}

const add = addTwoNumbers1(23,2)
console.log("Result is: ", add); //Result is: 25

function loginUserMessage(username){
    return `${username} just logged in!`
}

console.log(loginUserMessage("Aditya")); //Aditya just logged in!
console.log(loginUserMessage()); //undefined just logged in!