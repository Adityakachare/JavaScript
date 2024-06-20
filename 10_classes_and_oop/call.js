function setUsername(username) {
  //complex DB calls
  this.username = username;
}

function createUser(username, email, password) {
  //setUsername(username); Refer NOTE 1 to understand why this wont work
  //setUsername.call(username); Refer NOTE 2
  setUsername.call(this, username); //Output in NOTE 3
  this.email = email;
  this.password = password;
}

const newUser = new createUser("Aditya", "aditya@gmail.com", "123");
console.log(newUser); //createUser { email: 'aditya@gmail.com', password: '123' }

//NOTE 1: Issue in the above code is that we get the email and password as expected but the username is not printed, the task of setting the username is outsourced in some other function. As we can see in the above code, we observe that we have wriiten the statement to call the function "setUsername" but internally JS just calls the function but the actual tasks are not performed, only called and then the execution context is removed. To do so we need to explicitly call using some special methods. This will hold the reference.

//NOTE 2: setUsername.call(username); will run successfully also the call is successfull, but this wont hold the references(variable declaration, functions etc), therefore we need to give the execution context or the reference of the function that we are using to call. This will be done using the "this" keyword which will be passed in the parameter

//NOTE 3: 
/*
createUser {
  username: 'Aditya',
  email: 'aditya@gmail.com',
  password: '123'
}
*/