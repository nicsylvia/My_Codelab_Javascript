const str = "Hello World";
// 1 using charAt() method
console.log(str.charAt(1));
console.log(str.charAt(6));
//default index value = 0, return first character
console.log(str.charAt());
// index out of range, return empty string
console.log(str.charAt(13));
// index can't be converted to an integer, return first character
console.log(str.charAt('a'));

//2 using charCodeAt() method
//default index value = 0
console.log(str.charCodeAt());
console.log(str.charCodeAt("x"));
// Out of range returns NaN
console.log(str.charCodeAt(13)); 

const firstName = "Hello";
const lastname = "World";

//3 using concat method
let result1 = firstName.concat(" ", lastname);
console.log(result1);
// multiple arguments
let result2 = "Learning".concat(" ", "to", " ", "code.");
console.log(result2);

const question = "What is DOM?";
//4 using endsWith method
// checks whether the string ends with "?"
console.log(question.endsWith("?"));

const sentence = "Carbon emission is increasing Day by day.";
// 5 check if the string contains words
console.log(sentence.includes("day")); // true
console.log(sentence.includes("Day")); // true
console.log(sentence.includes("DAY")); // false