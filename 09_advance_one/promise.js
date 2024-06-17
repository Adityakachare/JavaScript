//PROMISE IN JS
/*
    Promise is an object. 
    The Promise object represents the eventual completion(or failure) of an asynchronous operation and its resulting value.
    The task that we assign in the queue will not be completed at that instance. It will be done but not now. It is in the queue but it wont be completed right now, nor will it be loaded.
    Example: A teacher has promised to give assignments, we dont know when the assignments will be given but as the teacher has promised the task will surely be done.
    Promise has 3 states:
    1. Pending
    2. Fulfilled
    3. Rejected
*/
//1. Consume the Promise 2. Create the Promise
// Making/Creating Promises: Promises accepts callbacks and also reduces the problem of callback hell(callback inside another callback). The function accepts 2 parameters, where one part denotes that the promise will be completed or the second part which tells that the promise wont be completed.
const promiseOne = new Promise(function (resolve, reject) {
  //Do an Async task: DB calls, Cryptography, Network Calls
  //For now we will take the example of setTimeout() for understanding purpose:
  setTimeout(function () {
    console.log("Async Task is complete");
    resolve(); // This is a method that we need to call to actually connect the promise with .then
  }, 1000);
});

//Consuming the promise: making use of the created promise
promiseOne.then(function () {
  console.log("Promise Consumed"); //This will print only when we connect .then and resolve in the promise
});
//.then() is directly related to "resolve". We pass a function/callback in .then. The function automatically receives an argument which is responsible for returning the values from the promise

//Whatever the case is "Promise consumed" will be printed only after the promise is executed first

//Following is a way to work with promises without using variables which makes it more concise.
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async Task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

//Using parameters in resolve():
//There may be cases where we need to pass data that we get from the network. resolve() will help to send the data from the created promise to the .then()
const PromiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Aditya", email: "abc@gmail.com" });
  }, 1000);
});

PromiseThree.then(function (user) {
  console.log(user); //We took user as the parameter for the .then() which will accept all the data from the promise and we successfully get the output as: "{ username: 'Aditya', email: 'abc@gmail.com' }"
});

//We now will see error based checking whether the Promise will be resolved or rejected. For example we make network request, db request or file accessing, if file is accessed successfully then we need to print something or even if it fails we need to print something.
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    //let error = true; //Will print: "ERROR: Something went wrong"
    let error = false; //Will print: "Aditya"
    if (!error) {
      resolve({ username: "Aditya", password: "1234" }); //This will work only when there are no issues while file accessing, db req, network req.
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

//promiseFour.then().catch(): .then() will handle the values and .catch() will handle the errors

/*
const username = promiseFour.then((user) => {
  console.log(user);
  return user.username;
});

console.log(username)
*/
//This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "ERROR: Something went wrong".

//Use .then() chaining for resolving this error:

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((myusername) => {
    console.log(myusername);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("The promise is either resolved or rejected");
  });
//The first .then() will give us the full user object
//The second .then() will give us the username which is returned by the earlier .then(). This is achieved by using the concept of chaining
//.catch() will handle the error, if error is true the we get the message as "ERROR: Something went wrong", if error is false then we will get the username from the object.
//.finally() is similar or acts like default, it will print no matter what the promise is evolved to(resolved or rejected)

//Using async await instead of .then() and .catch(). Similar to .then .catch, it waits for sometime to complete the task, if the task is done only then the program moves forward otherwise it gives the error
/*
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "JavaScript", password: "1234" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  const response = await promiseFive;
  console.log(response);
}
consumePromiseFive();
*/
//The above syntax is undoubtedly correct but the issue is regarding handling the errors. The above code is not able to handle the error or the reject part. So to avoid this error/ unwanted output we need to wrap the consumption part in try catch block. Will take the exact similar code with a slightly different name.

const promiseSix = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "JavaScript", password: "1234" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});

async function consumePromiseSix() {
  try {
    const response = await promiseSix;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseSix();
//The above code is successfull in handling the error part gracefully using the try catch

async function getAllUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json(); //This code wont work without the use of await as it is a network call, wihtout it we will get the output as: "Promise { <pending> }"
  console.log(data);
}

getAllUsers();

//Using .then() .catch() for the above function
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
//Exact same output as async await