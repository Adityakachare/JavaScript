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

