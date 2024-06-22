class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`Username is: ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username); // The super(username) in the Teacher class constructor calls the User class constructor, allowing the Teacher class to inherit and initialize the username property from the User class.
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`New course added by ${this.username}`);
  }
}

const aditya = new Teacher("Aditya", "aditya@gmail.com", "123");
aditya.addCourse();
aditya.logMe();

const aman = new User("Aman");
//aman.addCourse() //aman which is an object of User class does not have access to addCourse function which is defined in the subclass teacher.

aman.logMe();

console.log(aditya instanceof Teacher); //true
console.log(aman instanceof User); //true
console.log(aditya instanceof User); //true