// 1. Find the index of cat.
let string = "The cat is black. It lives in a black box, in a black jungle bag. The jungle is rough.";
let indexOfCat = string.indexOf("cat");
console.log(indexOfCat)

// 2. Find the index of the second black.
let black2 = string.indexOf("black box");
console.log(black2)

let black3 = string.indexOf("in");
let black4 = string.indexOf(".", black3) +1;
let method = string.slice(black3,black4);
console.log(method.length)

let sentence1 = string.lastIndexOf("The");
let sentence2 = string.lastIndexOf(".") +1;
let method1 =string.slice(sentence1,sentence2);
console.log(method1.length)

let string2 = "milk, chocolate, cookies";
let sentence3 = string2.indexOf("chocolate");
let sentence4 = string2.lastIndexOf(",");
let sentence5 = string2.slice(sentence3, sentence4)
console.log(sentence5)