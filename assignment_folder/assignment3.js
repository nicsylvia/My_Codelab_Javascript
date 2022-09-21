var mStr = "This is my test string to practice the JavaScript string function concepts.This is gonna be fun." 
// // To find the length of the entire string.
// // console.log(mStr.length)

// // 1. Find the length of the first sentence in the string.
// var mStr = "This is my test string to practice the JavaScript string function concepts.This is gonna be fun."
// let indexMethod = mStr.indexOf("T");
// let indexOfmethod = mStr.indexOf(".") + 1;
// let sliceMethod = mStr.slice(indexMethod, indexOfmethod);
// console.log(sliceMethod.length);
// // if there are other options for 
// or:
// var first = mStr.split(".");
// var firstLength = first[0].length;
// console.log(firstLength);

var first = mStr.split(".");
var second = first[0]
console.log(second.length)


// // 2. Find the length of the second sentence in the string. 
// let secondMethod = mStr.lastIndexOf("T");
// let secondOfmethod = mStr.lastIndexOf(".");
// let sliceOfmethod = mStr.slice(secondMethod, secondOfmethod);
// console.log(sliceOfmethod.length);
// or:
// var lastIndexOfFullstop = mStr.indexOf(".")
// let start = mStr.indexOf("T", lastIndexOfFullstop)
// console.log(start)
// let end = mStr.lastIndexOf(".") + 1;
// console.log(mStr.slice(start,end).length);
// or:
// var mStr = "This is my test string to practice the JavaScript string function concepts.This is gonna be fun." 
// var second = mStr.split(".")
// var secondLength = second[1].length
// console.log(secondLength)

// // 3. Find the first and last occurrence of the word "This". 
// var mStr = "This is my test string to practice the JavaScript string function concepts.This is gonna be fun." 
// var position1 = mStr.indexOf("This")
// console.log(position1)
// // indexOf returns the position of the first occurence of a substring
// var position2 = mStr.lastIndexOf("This")
// console.log(position2)
// // lastIndexof returns the last occurence of a substring in a string.

// // 4. Find the sub-string with length 12 from the START of the string mStr.
// console.log(mStr.substring(0, 12));
// /* This is because substring() extracts characters from indexStart up to but not including indexEnd.
// In substring, the o there represents the indexStart;
// The index of the first character to include in the returned substring.
// while the 12 which is the index end indicates where we want the substring to end.
// */

// // 5. Find the sub-string with length 12 from the END of the string mStr. 
// console.log(mStr.substring(mStr.length-12));
// let last12 = mStr.lastIndexOf(".") - 11;
// console.log(last12)
// console.log(mStr.substring(last12, mStr.length));
// // Explanation:
// // We are to get the sub string with length of 12 from the end of our string. Mechanically we can do, 
// console.log(mStr.substring(84, 96));
// /* 
//  because we know the length of the entire string as 96 and substracting 12 will be 84....so that can give us the last
//  12 but it's best practice to subtract the 12 from the length.
// */

