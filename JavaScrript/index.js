console.log("Hello World ");
var myName = "Abhishek Kumar Gond ";

console.log(myName);

// ***************************************************
// Data Types in JavaScript 
// 1.Premetive Data Type
// 1.Number Data Type 
var num = 45.5;
var num2 = 45;
console.log(num+num2);
// 2.String 
var Name = "Abhishek KUmar Gond ";
console.log(Name);
// 3.Boolean 
var isRenning = false;
console.log(isRenning);
// 4. Undifind Data Type 
var Abhi;
console.log(Abhi);
// 5. Null
var Num = null;
console.log(typeof(Num));
console.log(Num);
// 6.BigInt
var bigNumber = 453453459345834583495834905385349345353445n;
console.log(bigNumber);
console.log(typeof(bigNumber));


// convert String To Number 
var num = "10";
console.log(num);
console.log(typeof(+num));
console.log(Number(num));
console.log(typeof (Number(num)));

// Convert Number To String  in JavaScript 
let num1 = 56;
console.log(typeof String(num1)); // converting Number inTo String 
console.log(typeof ( num1+" " )); // converting Number into String 
console.log(typeof " ");


// truty value or Not 
var name2 = null;
if(name2){
    console.log("This is Truty ");
}
else{
    console.log("This is falsy ");
}

// *******************************************************************
// parseInt and parseFloat are Both using to vonvert String to number and number to String 

var myString = "45";
console.log(parseInt(myString)); // Converting String to Number 

// ******************************************************
console.log("Converting String In to Number ");
console.log(parseInt("123"));
console.log(parseInt("123" , 10));
console.log(parseInt("    123   "));
console.log(parseInt("077"));
console.log(parseInt("1.9"));
console.log(parseInt("xyz"));
console.log(parseInt("89579"));
console.log(parseInt("&123"));
console.log(isNaN(" "));
if(NaN == NaN){
    console.log("equals ");
}
else{
    console.log("Not A equal ");
}

// Data Type Section part-2
// Concatination in javaScript 
var String1= "abhishek ";
var String2 = "Kumar Gond ";
console.log(String1+String2);

console.log("Abhishek" - "Kumar Gond");






