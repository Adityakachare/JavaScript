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


//Suppose there is an E-Comm website and for the Cart section there is a function which accepts a single parameter but the user adds multiple items, to avoid this issue we can use the REST operator.
//...: this is the spread and rest operator, it depends on the usecase of the operator what we call it
function calculateCartPrice(num1){
    return num1
}
console.log(calculateCartPrice(200, 300, 500))
//In the above case only 200 will be returned and other values will be ignored

function calculateCartPrice1(...num1){
    return num1
}
console.log(calculateCartPrice1(200, 300, 500))
//This will return an array of all the values passed, we can perform any operation on the array, for this example we can add the elements of the array to calculate the total price of the user cart

//One more way to write the above logic:
function calculateCartPrice2(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice2(200, 300, 400, 500, 600)) //[ 400, 500, 600 ]
//val1 and val2 will have values 200 and 300 respectively while the remaining values will be stored in the num1 variable

//Passing objects in Functions:
const newUser = {
    username: "Aditya",
    price: 900
}
function handleObjects(newObject){
    console.log(`Username is: ${newObject.username} and the price is: ${newObject.price}.`);
}
handleObjects(newUser)

//We can also pass the object directly without creating it separately
handleObjects({
    username: "John",
    price: 1200
})

//The funtion will handle any kind of object which is being passed to it

//Passing arrays in Function
const newArray = [200, 300, 400, 500]
function returnArray(getArray){
    return getArray[2]
}
console.log(returnArray(newArray));
//We can do the same like we did for objects, we can directly pass the array without creating it separately

