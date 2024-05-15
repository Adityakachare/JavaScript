// There will be cases where we will have to check a value with multiple cases where Switch Case will be used
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;

    default:
        console.log("Invalid Month");
        break;
}

//If we dont write the break statement in each case the code will execute everything after that particular case until other break statement appears except the DEFAULT case. This is called as Fall Through.