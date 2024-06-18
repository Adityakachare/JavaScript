# Javascript and Classes

Yes, JavaScript does have classes. This feature was introduced with the ECMAScript 2015
specification (often referred to as ES6). However, it's important to note that JavaScript is
primarily a prototype-based language, and its classes are primarily syntactic sugar over
existing prototype-based inheritance mechanisms. In other words, it provides a more familiar
syntax for developers coming from class-based languages such as Java or C++, but under the
hood, it works somewhat differently.

A prototype-based language, like JavaScript, uses objects as the primary means of creating and extending structures. Instead of defining classes, you create an object that serves as a prototype for other objects. When you create a new object, it can directly inherit properties and methods from an existing prototype object, allowing for flexible and dynamic inheritance. This approach contrasts with class-based languages, which define a fixed blueprint for objects through classes.

## OOP

OOP is just a programming paradigm which means it is just a structure or way of writing programs.

## Objects:

- Objects are a collection of proprties(variables) and methods(functions).

## Why OOP?

Object-Oriented Programming (OOP) is used in JavaScript to help manage and organize complex code more effectively, avoiding what's known as **Spaghetti code**. Spaghetti code is a term for code that is tangled and complex, making it difficult to read, understand, and maintain. This often happens when code lacks structure, leading to a web of interdependencies and poorly defined data flows.

OOP addresses this by introducing concepts such as classes and objects, which encapsulate data and behavior into modular, reusable components. This organization makes the code more manageable and understandable. Moreover, OOP enables the use of many powerful features like inheritance, polymorphism, and encapsulation, which help in building scalable and maintainable applications. For instance, services can be defined as objects with specific methods and properties, promoting code reuse and separation of concerns, which further reduces complexity.

## Parts of OOP:

1. Object literals.
2. Constructor functions
3. Prototypes
4. Classes
5. Instances(new, this)

## 4 Pillars of OOP

1. **Abstraction** - In JavaScript, abstraction simplifies complex systems by creating classes that represent real-world objects. It hides the complex implementation details and exposes only the necessary parts, making the code easier to use and understand.<br/>Example: Imagine a system for managing vehicles. You create a Vehicle class with general properties like make, model, and year, and methods like start() and stop(). For specific types of vehicles, like Car or Truck, you only need to define the additional unique properties and behaviors, while the general ones are inherited.

2. **Encapsulation** - Encapsulation in JavaScript involves bundling data (properties) and methods (functions) that operate on the data into objects. It restricts direct access to some parts of the object, protecting the data from unintended changes and misuse.<br>Example: Consider a User object with properties like name, email, and password. Using encapsulation, you can provide public methods for getting and setting these properties while keeping the actual data private. This prevents unauthorized access and modifications, ensuring data integrity.

3. **Inheritance** - In JavaScript, inheritance allows one class to inherit properties and methods from another class. This promotes code reuse, as common functionality can be written once in a base class and shared with derived classes, forming a natural hierarchy.<br/>Example: You have a Person class with common properties such as name and age, and a method greet(). You create a Student class that inherits from Person and adds specific properties like studentID and methods like study(). This way, Student objects can use both general and specific functionalities.

4. **Polymorphism** - Polymorphism in JavaScript lets objects of different classes be treated as instances of the same class through a common interface. This means you can call the same method on different objects, and each object will respond in its own way, making the code more flexible and reusable.<br/>Example: In a drawing application, you might have a base class Shape with a method draw(). Different shapes like Circle, Rectangle, and Triangle inherit from Shape and implement their own versions of the draw() method. When you call draw() on any shape object, it behaves according to the specific shape's implementation.
