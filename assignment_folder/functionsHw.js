// 1. Write a function that takes two numbers as an argument(a, b), sum a and b, Return the value.
// Using arrow function.
let addition = (a, b) =>{
    console.log(a + b);
}
addition(2,3);

// Using function declaration.
function addition1(a ,b){
    console.log(a + b);
}
addition1(3, 5);

// Using function expression.
let addition2 = function(a, b){
    console.log(a + b)
}
addition2(7, 8)

// 2. Write a function that takes a string as an argument, extract the last three letters from the string, return the result. 
// Using arrow Function:
let stringExtract = (x) =>{
    console.log(x.slice(x.length-3, x.length));
}
stringExtract("CodeLab");
stringExtract("Innovation");

// Using function declaration:
function extract(x){
    return x.slice(x.length-3, x.length);
}
console.log(extract("Coventions"));

// Using function expression:
let extract3Letters = function(x){
    console.log(x.slice(x.length-3, x.length));
}
extract3Letters("Colin");

// 3. Write a function that takes an array and a value as an argument, return the nth term of "a". myFunction([1,2,3,4,6],4)=6.
// using arrow function:
let nthTerm = (a, b) =>{
    console.log(a[b]);
}
nthTerm([1, 2, 3, 4],2);
nthTerm([1, 5, 3, 4],3);
// a is my array.
// b is my nth...that is what you're using to search through
// a[b]: to access an array, e.g a[0] so b is the 0 there.

// 4. Write a function that takes a number as an argument. If the number is even return "true" else "false".
// Using function declaration:
function checkEvenNo(n) {
    n % 2 === 0 ? console.log("True") : console.log("False");
}
checkEvenNo(8);

// Using function expression:
let evenNumbers = function(x){
    x % 2 == 0 ? console.log("True, even number") : console.log("False, not an even number ");
}
evenNumbers(10);

// Using arrow Functions:
let notEvenNo = (y) =>{
    y % 2 == 0 ? console.log("True") : console.log("False");
}
notEvenNo(12);
notEvenNo(34);

// 5. Write a function that takes two values, say a and b, as arguments, return true if the two values are equal and of the same type.
// Using function expression:
let twoEqualValues = function(a, b){
    a === b ? console.log("True") : console.log("False");
}
twoEqualValues(3,"3");

// Using arrow function:
let equal2 = (x, y) =>{
    x === y ? console.log("True") : console.log("False");
}
equal2(5, 5);
equal2(9, "9");

// Using function declaration:
function valuesTwo(a, b){
    a === b ? console.log("True") : console.log("False");
}
valuesTwo(1, 2);
valuesTwo("1", "1");
console.log("**************")
// Learning if and else and implementing it........using ifelse.........using ifelse with function declaration.
function check2Nos(a, b){
    if (a === b) {
        console.log("True")
    }
    else{
        console.log("False")
    }
}
check2Nos(1, 2);
check2Nos("5", 5);

// Using ifelse with arrow function.
let checkEvenNumbers = (x, y) =>{
    if (x === y) {
        console.log("True")
    } else {
        console.log("False")
    }
}
checkEvenNumbers(23, 25);

// 6. Write a function that takes a string(a) as an argument. Extract the first half a, return the result.
// Using function expression:
let extractFirstHalf = function(a){
    console.log(a.slice(0, a.length/2));
}
extractFirstHalf("CodeLabs");
extractFirstHalf("Boolean");

// Using function declaration:
function toExtract2(a){
    console.log(a.slice(0, a.length/2));
}
toExtract2("SheCodes");

let codelab = function viva(x){
    let answer = x**2;
    return answer;
}
codelab(2)
console.log(codelab(2))
let anything = codelab(2)
console.log(anything)
