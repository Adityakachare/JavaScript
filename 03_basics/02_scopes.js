let a = 10; // Declaring 'a' with let, scoped to the block it's in.
const b = 20; // Declaring 'b' with const, scoped to the block it's in.
var c = 30; // Declaring 'c' with var, function-scoped or globally scoped.

if (true) {
    var c = 3000; // This reassigns the existing variable 'c' because var declarations are not block-scoped.
}

console.log(a); // Outputs: 10
console.log(b); // Outputs: 20
console.log(c); // Outputs: 3000 (modified inside the block)



let abc = 200; // Declaring 'abc' with let, scoped to the block it's in.

if (true) {
    let abc = 300; // Declaring a new 'abc' variable scoped to the block.
    console.log("Block Scoped: ", abc); // Outputs: 300
}

console.log(abc); // Outputs: 200 (the outer 'abc' variable is not affected)

//Nested Scope
function one(){
    const username = "Aditya"

    function two(){
        const website = "YouTube"
        console.log(username);
    }
    //console.log(website); //This line will give an error as function one() cannot access the varaibles of the inner function two()
    two();
}
one()

//Same concept using if else:
if(true){
    const firstName = "Aditya"
    if(true){
        const lastName = " Kachare"
        console.log(firstName + lastName);
    }
    //console.log(lastName); //Not accessible
}
//console.log(firstName); //Not accessible

//INTERESTING CONCEPT

function addOne(num){
    return num + 1
}
addOne(5)

const addTwo = function(num){
    return num + 2
}
addTwo(5)

// HOISTING: If we call addOne() before the function declaration, we won't get any error because function declarations are hoisted. However, if we call addTwo() before the function expression declaration, we will get an error because only the variable declaration is hoisted, not the function assignment.