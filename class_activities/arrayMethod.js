// Array methods.

// 1. isArray
let arrayOfNumbers = [1, 2, 3];
console.log(Array.isArray(arrayOfNumbers))
let arrayOfNames = ["sylvia"];
console.log(Array.isArray(arrayOfNames))

// 2. The reverse method
let me = ["sylvia", "dark", "tall", "code"];
console.log(me.reverse())

let codelab = "colin";
let codelab1 = codelab.split("");
console.log(codelab1)
console.log(codelab1.reverse())
// to get niloc
let codelab3 = codelab1.toString();
console.log(codelab3)
let codelab4 = codelab3.replaceAll(",","");
console.log(codelab4)


// August 22 2022.
// converts arrays to strings
let codelab5 = codelab1.join("");
console.log(codelab5)

// // The push method
let pushSentence =  ["Carbon emission", "is increasing Day by day."];
// let pushMethod = pushSentence.push("in", "codelab", 4, ["2 weeks"]);
// console.log(pushMethod)
// console.log(pushSentence)
// // to access an array.
// let number = 3
// console.log(pushSentence[number])
// pushSentence[number] = "colin";
// console.log(pushSentence[1])

// The unshift method
let unshiftMethod = pushSentence.unshift("In codelab");
// console.log(pushSentence)

let shiftMethod = pushSentence.splice("In codelab");
// console.log(shiftMethod)
// console.log(pushSentence)

// The splice method.
let numbers = [1, 2, 3, 4, 5,6 ,7, 8];
console.log(numbers.splice(3))
console.log(numbers.fill(10, 3, 4))
// console.log(numbers)
