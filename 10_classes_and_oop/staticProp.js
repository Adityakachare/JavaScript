class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username: ${this.username}`);
  }

  createId() {
    return `123`;
  }

  //For situations where we dont want to give access of a particular method to every object which is instantiated by this class. To do so we simply use the keyword "static" before the method as shown below.
  static createId1() {
    return "newId";
  }
}

const aditya = new User("aditya");
console.log(aditya.createId());

const abc = new User("abc");
//console.log(abc.createId1()); will give and error as: "abc.createId1 is not a function"

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const raj = new Teacher("Raj", "r@gmail.com");
raj.logMe();
