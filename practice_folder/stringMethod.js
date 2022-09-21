let practice1 = "My goat is expensive. Ade eats too much. Babatunde is the most stubborn fellow in CodeLab. Sylvia always come late to class.";
let totalLength = practice1.length;
console.log(totalLength)

// 1. Find the length of the first sentence in the string.
let firstSentence = practice1.indexOf("M");
let firstSentence1 = practice1.indexOf(".") + 1;
let method1 = practice1.slice(firstSentence, firstSentence1);
console.log(method1.length)
//  2. Find the length of the second sentence in the string.
let secondSentence = practice1.indexOf("A");
let secondSentence1 = practice1.indexOf(".", secondSentence) + 1;
let method2 = practice1.slice(secondSentence, secondSentence1);
console.log(method2.length)
//  3. Find the length of the third sentence in the string.
let thirdSentence = practice1.indexOf("B");
let thirdSentence1 = practice1.indexOf(".", thirdSentence) + 1;
let method3 = practice1.slice(thirdSentence, thirdSentence1);
console.log(method3.length)
//  4. Find the length of the fourth sentence in the string.
let fourthSentence = practice1.indexOf("S");
// let sentence = practice1.lastIndexOf(".") + 1;
let fourthSentence1 = practice1.indexOf(".", fourthSentence) + 1;
let method4 = practice1.slice(fourthSentence, fourthSentence1);
console.log(method4.length)
// 5.  Find the first and last occurrence of the word "is". 
let firstIs = practice1.indexOf("is")
let lastIs = practice1.lastIndexOf("is")
console.log(firstIs)
console.log(lastIs)

// 6. Find the sub-string with length 12 from the START of the string mStr.
// 7. Find the sub-string with length 12 from the END of the string mStr. 
