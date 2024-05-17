//FOR EACH LOOP
const prog = ["js", "rb", "py", "cpp", "java"]
prog.forEach( function (item) {
    console.log(item);
} )
//OUTPUT:
/*
js
rb
py
cpp
java
*/
//For each loop accepts a call back function. The callback function has no name. The parameter will have the value on the basis of which the iterations has to be done. In the above case I have taken the name of the parameter as "item".

//Using Arrow Function:
prog.forEach((value) => {
    console.log(value);
} )
//Will give the same output as above

//Suppose we need to pass the function separately to the array variable we can do it as follows:

function printMe(item){
    console.log(item);
}
prog.forEach(printMe) //We just need to give the reference to the function and not invoke it

//forEach has access to other parameters too like index, list of the entire array
prog.forEach( (item, index, arr) => {
    console.log(item, index, arr);
})
/*
js 0 [ 'js', 'rb', 'py', 'cpp', 'java' ]
rb 1 [ 'js', 'rb', 'py', 'cpp', 'java' ]
py 2 [ 'js', 'rb', 'py', 'cpp', 'java' ]
cpp 3 [ 'js', 'rb', 'py', 'cpp', 'java' ]
java 4 [ 'js', 'rb', 'py', 'cpp', 'java' ]
*/

const myCoding = [
    {
        languageName: "Java",
        extension: ".java"
    },
    {
        languageName: "JavaScript",
        extension: ".js"
    },
    {
        languageName: "Python",
        extension: ".py"
    },
]

myCoding.forEach((item)=>{
    console.log(`Name of the language is: ${item.languageName}`);
    console.log(`Extension of the language is: ${item.extension}`);
})
//Output:
/*
Name of the language is: Java
Extension of the language is: .java
Name of the language is: JavaScript
Extension of the language is: .js
Name of the language is: Python
Extension of the language is: .py
*/