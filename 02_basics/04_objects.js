//Singleton Objects: using constructor
const tinderUser = new Object() //Singleton Object
const tinderUser1 = {} // Non-Singleton Object
//Both of the above mentioned ways will give the same output, the objects will be created similarly without any difference internally
console.log(tinderUser); //{}
console.log(tinderUser1); //{}

tinderUser.id = "User1"
tinderUser.name = "Aditya"
tinderUser.isLoggedIn = false
console.log(tinderUser); //{ id: 'User1', name: 'Aditya', isLoggedIn: false }

//To show use of objects inside objects
const user1 = {
    email:"aditya@gmail.com",
    userName: {
        fullName:{
            firstName: "Aditya",
            lastName: "Kachare",
        }
    }
}
console.log(user1);
/*
//Output
{
  email: 'aditya@gmail.com',
  userName: { fullName: { firstName: 'Aditya', lastName: 'Kachare' } }
}
 */
//To access the values in the nested objects:
console.log(user1.userName.fullName.firstName); //Aditya

//Optional Chaining: Suppose the object from an API does not have a particular value that is to be used/printed or we are unsure about the value we can simple add a "?" after that value which will handle this case.
//Will be discussed in detail
console.log(user1.userName.fullName?.firstName); //Aditya

//Combining Objects:
const obj1 = {1: "A", 2: "B"}
const obj2 = {3: "C", 4: "D"}

const obj3 = {obj1, obj2} //This is an incorrect way to combine objects as it will give an incorrect output which will simply have object inside object rather than combining them
console.log(obj3) //{ obj1: { '1': 'A', '2': 'B' }, obj2: { '3': 'C', '4': 'D' } }

const obj4 = Object.assign(obj1,obj2)
console.log(obj4); //{ '1': 'A', '2': 'B', '3': 'C', '4': 'D' }
//The assign method accepts basically 2 parameters {target} and {source} the source object will be merged in the target object
//The above syntax is definitely correct but the below mentioned syntax is better

const obj5 = Object.assign({},obj1,obj2)
console.log(obj5); //{ '1': 'A', '2': 'B', '3': 'C', '4': 'D' }
//This syntax also gives the same output but the difference being that in this syntax the objects are stored in an new empty object "{}"
//In the earlier example the objects were combined and stored in obj1, so it is always better to store the new combined object in a new empty object

//But finally the most efficient and simple way is to use the Spread Operator
const obj6 = {...obj1, ...obj2}
console.log(obj6); //{ '1': 'A', '2': 'B', '3': 'C', '4': 'D' }

// Accessing values that come from the Database: usually data/objects from the database comes in the form of an array as shown below
const users = [
    {
        id: 1,
        name: "Aditya",
    },
    {
        id: 2,
        name: "Mark",
    },
    {
        id: 3,
        name: "John",
    },
]
console.log(users[1].name);

console.log(tinderUser);

console.log(Object.keys(tinderUser)); //[ 'id', 'name', 'isLoggedIn' ]
//Will return all the keys of the object in an array
console.log(Object.values(tinderUser)); //[ 'User1', 'Aditya', false ]
//Will return all the values of the object in an array
console.log(Object.entries(tinderUser)); //[ [ 'id', 'User1' ], [ 'name', 'Aditya' ], [ 'isLoggedIn', false ] ]
//Will return each entry in a separate array where the first element will always be the key while the second will always be the value associated with the key

console.log(tinderUser.hasOwnProperty("isLoggedIn")); //true
//Will return boolean value after checking if the property passed as the argument is present in the object or not


// Destructuring Objects (Important topic as it will be frequently used)
//To make the code look clean and readable the following syntax can be followed
const course = {
    courseName: "JAVASCRIPT",
    price: 100,
    courseInstructor: "Aditya"
}
const {courseInstructor} = course;
console.log(courseInstructor); //Aditya
//We can also rename the property of the object directly in the syntax itself
const {courseInstructor: cInst} = course;
console.log(cInst); //Aditya


