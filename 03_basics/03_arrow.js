const user = {
    username: "Aditya",
    price: 999,
    welcome: function(){
        console.log(`${this.username}, welcome to the website`);
        console.log(this); //This will print the current context or simply all the variables/values present in the scope
        //Output
        /*
        { username: 'Aditya', price: 999, welcome: [Function: welcome] }
        { username: 'Aman', price: 999, welcome: [Function: welcome] }
        */
    }
    //this keyword is used to refer to the current context. In the above example we can see that the variable "username" is accessed using this keyword.
}

user.welcome() //Aditya, welcome to the website
user.username = "Aman"
user.welcome() //Aman, welcome to the website //This was possible because we have not hardcoded the value in the console.log(), we have mentioned that whichever the current context it is in, print that particular value. And in the above line we simply changed the context which is why we get our desired output.

console.log(this); //{}
/*
We are in the Node Environment which is why the current context will be empty or will point to an empty object.
*********IMPORTANT**********
But at the same time if we run the above statement on any brower it will return something like this: 
 //Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}
Whenever the JS engine runs on the browser the global object present is the "window" object
*/

function func(){
    console.log(this);
}
func() //Output:
/*
<ref *1> Object [global] {
  global: [Circular *1],
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  structuredClone: [Function: structuredClone],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: Performance {
    nodeTiming: PerformanceNodeTiming {
      name: 'node',
      entryType: 'node',
      startTime: 0,
      duration: 31.5561629999429,
      nodeStart: 1.9947410002350807,
      v8Start: 4.18091999925673,
      bootstrapComplete: 23.569933999329805,
      environment: 11.488514000549912,
      loopStart: -1,
      loopExit: -1,
      idleTime: 0
    },
    timeOrigin: 1715625356049.436
  },
  fetch: [AsyncFunction: fetch]
}
*/

function example(){
    const username = "Aditya"
    console.log(this.username);
}
example() //undefined: We can't use this directly inside funtions

/********************ARROW FUNTION***********************/
const example1 = () => {
    const username = "Aditya"
    console.log(username);
}
example1()

//Normal Arrow Function
const addTwo = (num1, num2)  => {
    return num1 + num2
}
console.log(addTwo(2,32));

//Implictit Return: No parenthesis and no return statement, whole funtion in a single line
const addThree = (num1, num2, num3) => num1 + num2 + num3
console.log(addThree(3,4,5));

//Explicti Return is exactly oppsite of Implicit where return keyword is compulsorily used
//To return an object using the Implicit Return type function we need to wrap the object uin parenthesis as follows:
const obj = () => ({username: "Aditya"})
console.log(obj())// { username: 'Aditya' }