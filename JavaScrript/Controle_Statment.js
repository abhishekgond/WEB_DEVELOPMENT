const prompt = require("prompt-sync")();
// if else Statment

// let num =23;
// if(num>=18 && num<=60){
//     console.log("You Can Drive ");
// }
// else if(num < 18){
//     console.log("You Cant Drive ");
// }
// else{
//     console.log("You Cant Drive ");
// }
// let i=0
// while(;i<=5;i++){
//     console.log(i);
// }
// ***************************************************************
// Switch Case
// var day = 5;
// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("You Can`t Drive ");
//     break;
// }
// Question
var areaOfShapes = "Rectangle";
switch (areaOfShapes) {
  case "Rectangle":
    console.log("Enter The side first Of Rectangle ");
    var side1;
    side1 = prompt("Enter The sirst Side1  = ");
    var side2;
    side2 = prompt("Enter The sirst Side2  =  ");
    console.log("Area Of Rectangle is ");
    console.log(parseInt(side1) * parseInt(side2));
    break;
  case "Circle":
    console.log("Enter The radious of The Circle ");
    var r;
    r = prompt("Enter The Radious = ");
    var areaOfCircle = 3.14 * parseFloat(r) * parseFloat(r);
    console.log(areaOfCircle);
    break;
  case "Square":
    console.log("Enter the Side Of Square ");
    var side = prompt("Enter The Side = ");
    console.log(parseInt(side) * parseInt(side));
    break;
    default:
        console.log("Enter The Valid Shape ");
}
// loops in javaScript
