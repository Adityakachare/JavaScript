//const is used to declare a constant variable, which means we cannot change or reassign it's value
const accountId = 123

//We can declare VARIABLES using let and var keywords
let accountEmail = "aditya@gmail.com"
var accountPwd = "12345"
accountCity = "Thane" //This type of variable declaration is not encouraged
let accountState;// If we declare a variable in JS and don't assign any value to it, JS automatically makes it undefined
/*
const and let are the preferred keywords
var is not used in JS due to the issue in Block and Functional scope
*/

//accountId = 1 //not allowed
accountEmail = "ak@gmail.com"
accountPwd = "09238"
accountCity = "Dadar"

console.log(accountId);

console.table([accountId,accountEmail,accountPwd,accountCity, accountState])