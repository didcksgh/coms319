/*
Chanho Yang
chanhoy
Feb 8, 2023
Activity06 - Variables
*/

// Q1 : Is it permited the next ?
console.log("Q1 ---------------")
var var1 = "Iowa";
console.log(var1);
var var1 = 124;
console.log(var1);
// Is it permited ?
console.log("Yes");


// Q2 : Is it valid ?
console.log("Q2 ----------------"); 
let var2 = "Ames"; 
console.log(var2);
let var2 = 124;
// Is it valid ?
console.log("Not");

// Q3 : Is it valid ?
console.log("Q3 ----------------"); 
let var3 = "ISU";
console.log(var3);
var3 = 2023;
console.log(var3);
console.log("Valid ?: Yes, it is.")


// Q4 : Explain the Error.
console.log("Q4 ----------------");
let var4;
const var5;
console.log("What's the error : Missing initializer in const declaration.")



// Q5 : Explain the Error.
console.log("Q5 ----------------"); const var6 = 3.1415;
var6 = 2.8;
console.log("What's the error : Assignment to constant variable.")


// Q6 : Explain the Error.
let first name = "Abraham";
console.log("Unexpected identifier 'name'");
let 2numbers = [1,2];
console.log("Invalid or unexpected token");
let city-state = "Ames Iowa";
console.log("Unexpected token");



// Q7 : What !! ??
let mainCity = "DesMoines";
console.log("This is the Capital :", MainCity)
console.log("Uncaught reference error: Mancity is not defined.")



// Q8 : "let" and "const" scope vs "var" scope
if (5 === 5) {
    var var7 = 100;
} console.log(var7);
if (5 === 5) {
    let var8 = 100;
}
console.log(var8);
console.log("Uncaugt reference erro: var8 is not defined.")


