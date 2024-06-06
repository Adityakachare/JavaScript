const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.map((num) => num+10)
console.log(newNums);
/*
[
    11, 12, 13, 14, 15,
    16, 17, 18, 19, 20
]
*/

//CHAINING: using more than one methods in a single statement
const newNumbers = myNums
                    .map((num) => num*10 )
                    .map((num) => num+1 )
console.log(newNumbers);
/*
[
  11, 21, 31, 41,  51,
  61, 71, 81, 91, 101
]
*/

const newNumbers1 = myNums
                    .map((num) => num*10 )
                    .map((num) => num+1 )
                    .filter((num) => num>=40)
console.log(newNumbers1);
/*
[
  41, 51,  61, 71,
  81, 91, 101
]
*/