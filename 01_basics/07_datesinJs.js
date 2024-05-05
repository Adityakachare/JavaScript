//Dates in JavaScript

let myDate = new Date();
console.log(myDate); //2024-05-05T05:12:37.075Z
console.log(myDate.toString()); //Sun May 05 2024 05:13:46 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); //Sun May 05 2024
console.log(myDate.toLocaleDateString()); //5/5/2024
console.log(myDate.toISOString()); //2024-05-05T05:23:09.898Z
console.log(myDate.toLocaleTimeString()); //5:23:09 AM
console.log(typeof myDate); //object

//Declaring a specific Date
let myCreatedDate = new Date(2024, 0, 1); 
console.log(myCreatedDate.toDateString());
/* 
2024 will be the year
0 based indexing for the month therefore the output will have Jan
1 will be the date

The function will automatically evaluate the day on the 1st of January 2024 which was Mon
Therefore the output: Mon Jan 01 2024
*/

let myCreatedDatewithTime = new Date(2024, 0, 1, 5, 3, 10);  
console.log(myCreatedDatewithTime.toLocaleString()); 
/*
Continuation of the above code...
5 will represent the hours
3 will be the mins
10 will be the secs

Therefore the output: 1/1/2024, 5:03:10 AM
*/

//Timestamps in JavaScript
let myTimeStamp = Date.now()
console.log(myTimeStamp); //1714887728742
/*
The Date.now() static method returns the number of milliseconds elapsed since the epoch, which is defined as the midnight at the beginning of January 1, 1970, UTC.
*/

console.log(myCreatedDate.getTime()); 
/*
getTime() method can be used for comparing time with the current of any user declared time 
in this case the time elapsed from 1st of January 1970 to myCurrentDate evaluated
*/


let newDate = new Date();
console.log(newDate);
// METHODS TO GET MONTH/YEAR/DAY etc
console.log(newDate.getDate());
console.log(newDate.getMonth());
console.log(newDate.getFullYear());
console.log(newDate.getDay());

console.log("BREAK");

// Internationalization
console.log( newDate.toLocaleString('default',{
    weekday: "long",
    dayPeriod: "long",
    //timeZone: 'timeZone'
}));