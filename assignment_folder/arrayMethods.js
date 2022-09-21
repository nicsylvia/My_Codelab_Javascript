// In the following shopping cart: add, remove, edit items.
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"]
console.log(shoppingCart)

// 1. Add "Meat" in the beginning of your shopping cart if it has not been already added.
let addMeat = shoppingCart.unshift("Meat");
console.log(shoppingCart)

// 2. Add "Sugar" at the end of your shopping cart if it has not been already added.
let addSugar = shoppingCart.push("Sugar")
console.log(shoppingCart)

// 3. Remove "Honey" if you are allergic to honey.
let removeHoney = shoppingCart.splice(4, 1)
console.log(shoppingCart)

// 4. Modify Tea to "Green Tea".
console.log(shoppingCart.indexOf("Tea"))
shoppingCart.splice(3, 1, "green tea")
console.log(shoppingCart)

let modifyTea = shoppingCart.fill("Green Tea", 3, 4)
console.log(shoppingCart)

// 6. Declare an array variable name itcompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon.
let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

console.log(" ")
console.log("*******************No 7*************")
// 7. Print out the array using console.log()
console.log("Printing out the companies")
console.log(itCompanies)

console.log(" ")
console.log("*******************No 8*************")
// 8. Print the number of companies in the array.
let noOfCompanies = itCompanies.length
console.log("Printing out the number of companies")
console.log(noOfCompanies)

console.log(" ")
console.log("*******************No 9*************")
// 9. print the first company, middle and last company.
let firstCompany = itCompanies[0];
let middleCompany = itCompanies[3];
let lastCompany = itCompanies[6];
console.log("Printing out the first, middle and last companies")
console.log("The first company is:", firstCompany)
console.log("The middle company is:", middleCompany)
console.log("The last company is:", lastCompany)

console.log(" ")
console.log("*******************No 10*************")
// 10. Print out each company
let secondCompany = itCompanies[1];
let thirdCompany = itCompanies[2];
let fifthCompany = itCompanies[4];
let sixthCompany = itCompanies[5];
console.log("Printing out each of the companies")
console.log("The First company is", firstCompany )
console.log("The Second company is", secondCompany)
console.log("The Third company is", thirdCompany)
console.log("The Fourth company is", middleCompany)
console.log("The Fifth company is", fifthCompany)
console.log("The Sixth company is", sixthCompany)
console.log("The Seventh company is", lastCompany)

// 11. Change each company name to uppercase one by one and print them out.
console.log(" ")
console.log("*******************No 11*************")
console.log("Printing out the uppercase of each of the companies")
console.log(firstCompany.toUpperCase())
console.log(secondCompany.toUpperCase())
console.log(thirdCompany.toUpperCase())
console.log(middleCompany.toUpperCase())
console.log(fifthCompany.toUpperCase())
console.log(sixthCompany.toUpperCase())
console.log(lastCompany.toUpperCase())

// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon are big IT companies.
let companySentence = itCompanies.concat("are big IT companies")
console.log(" ")
console.log("*******************No 12*************")
console.log("Printing out the array as a sentence: ")
console.log(companySentence.toString())

// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found.
let checkCompanies = "Twitter";

itCompanies.includes(checkCompanies) ? console.log("Company exists") : console.log("Company is not found");


// // 14. Filter out companies which have more than one "o" without the filter method.


// // 15. Sort the array using sort() method
// let sortCompany = itCompanies.sort();
// console.log(sortCompany)

// // 16. Reverse the array using reverse() method
// console.log(" ")
// console.log("*******************No 16*************") 
// let reverseItCompany = itCompanies.reverse()
// console.log("This is the company in the reverse order:", reverseItCompany)
// console.log("This is how the company is in the array now:", itCompanies)

// // 17. Slice out the first 3 companies from the array.
// let slice3FromFront = itCompanies.splice(0, 3);
// console.log(" ")
// console.log("*******************No 17*************")
// console.log("Slicing out the first 3 companies: ")
// console.log("The 3 coompanies sliced out are:", slice3FromFront)
// console.log("The remaining companies in the array:", itCompanies)

// // 18. Slice out the last 3 companies from the array.
// let slice3FromBack = itCompanies.splice(-3);
// console.log(" ")
// console.log("*******************No 18*************")
// console.log("Slicing out the last 3 companies: ")
// console.log("The 3 coompanies sliced out are:", slice3FromBack)
// console.log("The remaining companies in the array:", itCompanies)


// // 19. Slice out the middle IT company or companies from the array.
// console.log(" ")
// console.log("*******************No 19*************")
// console.log("Slicing out the middle company(ies): ")
// let sliceMiddleCompany = itCompanies.splice(middleCompany)
// console.log("The middle company sliced out is:", sliceMiddleCompany)
// console.log("The remaining companies in the array:", itCompanies)


