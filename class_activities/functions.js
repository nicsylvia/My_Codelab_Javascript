// let square = 4;
// console.log(square * square)

// function square1(x){
//     return 2 * 2
// }
// console.log(square1(3))

// function square2(x, y){
//     return x * y
// }
// console.log(square2(7))

// let sayMyName = function(x){
//     console.log(x)
// }
// sayMyName("Sylvia");

// // function to log to the console random numbers from 1 - 50
// function numbers(x){
//     return Math.floor(Math.random()* x)
// }
// console.log(numbers(5))
// console.log(numbers(100))

// const power = (base, exponential) =>{
//     let result = base ** exponential;
//     return result;
// }
// console.log(power(10, 2))

// Wednesday August 31st 2022.
// Classwork:

// 1. Write a function that takes an array of strings and prints it out in uppercase
const name = ["Facebook", "Amazon", "Google"];
const me = ["sylvia", "adimike", "dark"];

const arrayToUpperCase = (x) =>{
    console.log(x.map((i) => {return i.toUpperCase()}))
}
arrayToUpperCase(me)
arrayToUpperCase(name)


// 2. Write a function that takes an array and a string and checks if the string is in the array, if it's present
// the function should print the string, if it's not it should print "string not found".
// function toCheck(){
//     let stringArray = ["Twitter", "CodeLab"];
//     return stringArray.includes("CodeLab") ? console.log("String exists") : console.log("String not found");
// }
// console.log(toCheck())

const check =()=> {
    let stringArray = ["Twitter", "CodeLab"];
    stringArray.includes("Twitter") ? console.log("Exists") : console.log("Does not exists");
}
check();

// 3. Write a function to reverse any string given to it.
function toReverse(){
    let myName = ["Twitter", "CodeLab"];
    return reverseMyName = myName.reverse();
}
console.log(toReverse())
