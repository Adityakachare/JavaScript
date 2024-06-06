const coding = ["js", "rb", "py", "cpp", "java"]

const values = coding.forEach((item) => {
    console.log(item);
//     js
//     rb
//     py
//     cpp
//     java
})

console.log(values); //for each loop does not return any value, even if done manually by using the "return" keyword it wont't work and will give an output as undefined


//FILTER
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = myNums.filter((num) => num>4) //Will accept a call back funtion and a condition which will help to return a specific output
console.log(newNums); //[ 5, 6, 7, 8, 9, 10 ]


//If we use curly braces for enclosing the condition then we will have to explicitly return the statement. As shown below:
const myNums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums1 = myNums1.filter((num1) => {
    return num1>4
}) 
console.log(newNums); //[ 5, 6, 7, 8, 9, 10 ]


//Same using the forEach loop
const newNumbers = []
myNums.forEach((num)=>{
    if(num>4){
        newNumbers.push(num)
    }
})
console.log(newNumbers); //[ 5, 6, 7, 8, 9, 10 ]


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter((bk) => bk.genre == 'History')
  console.log(userBooks)
  /*
  [
    {
        title: 'Book Three',
        genre: 'History',
        publish: 1999,
        edition: 2007
        },
        {
            title: 'Book Seven',
            genre: 'History',
            publish: 1986,
            edition: 1996
            }
            ]
            */

  userBooks = books.filter((bk) => bk.publish >= 2000)
  console.log(userBooks);
  /*
  [
    {
        title: 'Book Five',
        genre: 'Science',
        publish: 2009,
        edition: 2014
    },
    {
        title: 'Book Eight',
        genre: 'Science',
        publish: 2011,
        edition: 2016
    }
]
*/
           
userBooks = books.filter((bk) => {
    return bk.publish >= 1995 && bk.genre === "History"
})
console.log(userBooks);
/*
[
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  }
]
*/