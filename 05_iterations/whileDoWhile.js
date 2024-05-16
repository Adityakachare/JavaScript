let index = 0
while (index <= 10) {
    console.log(`Value of index is ${index}`);   
    
    index = index+2;
}
/*OUTPUT
Value of index is 0
Value of index is 2
Value of index is 4
Value of index is 6
Value of index is 8
Value of index is 10
*/
// The while loop repeatedly prints the value of 'index' as long as it's less than or equal to 10. 'index' starts at 0 and increments by 2 in each iteration until it reaches or exceeds 10. The loop ends when 'index' becomes greater than 10, ensuring the condition is no longer met.

//Array in while loop
let myArray = ["SpiderMan", "IronMan", "BatMan"]
let arr = 0
while(arr < myArray.length){
    console.log(`Value is: ${myArray[arr]}`)
    arr = arr + 1;
}
/*OUTPUT
Value is: SpiderMan
Value is: IronMan
Value is: BatMan
*/


//DO WHILE LOOP
let score = 1
do {
    console.log(`Score is: ${score}`)
    score++
} while (score <= 10);
/* OUTPUT
Score is: 1
Score is: 2
Score is: 3
Score is: 4
Score is: 5
Score is: 6
Score is: 7
Score is: 8
Score is: 9
Score is: 10
*/
/* 
In a do-while loop, the block of code is executed at least once before checking the condition.
Here, the loop prints the value of 'score' from 1 to 10, incrementing 'score' by 1 in each iteration.
*/


let score1 = 11
do {
    console.log(`Score is: ${score1}`)
    score1++
} while (score1<=10);
//Output: Score is: 11
// Despite the condition being false initially, the block of code executes at least once, resulting in "Score is: 11" being printed.