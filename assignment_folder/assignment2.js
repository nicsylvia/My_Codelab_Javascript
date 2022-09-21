// 1. Declare an empty array.
// 2 ways i can go about this:
let first = [];
let second = ["sylvia", "CodeLab"];
console.log(first);
console.log(second);
// OR:
let users = ["esther", "favour"];
users.length = 0;
console.log(users);
// this will log to the console an empty array.

// 2. Declare an array with more than five number of elements, console.log to see the results.
let products = ["sckoolKod", "oneVote", "uCare", "callCare", "sos", "vercel"];
console.log(products);

// 3. Declare an array with mixed datatypes.
let company = ["alphaBeta", "working", 5, true, "3", "", null];
console.log(company)

// 7. Declare four objects with five different elements each.
let car = {
    tyres: 4,
    model: "toyota",
    door: 4,
    sterring: 1,
    working: true,
    colour: "Red",
}
console.log(car)

let  person = {
    name: "sylvia",
    complexion: "dark",
    height: "tall",
    eye: 2,
    alive: true,
}
console.log(person)

let school = {
    name: "sonex",
    address: "23, jones street",
    years: 4,
    alive: true,
}
console.log(school)

let laptop = {
    name: "dell",
    windows: 10,
    goodCondition: true,
    owner: "sylvia",
}
console.log(laptop)

let church = {
    name: "St vincent",
    address: "34 Esado street",
    active: true,
    years: 15,
}
console.log(church)

// Type conversion
console.log(8*null);
console.log("5" - 1)
console.log("5" + 1)
console.log("five" * 2)
console.log(false == 0)

// ==(equals to)
// |==(not equals to)
// Type coersion
console.log(null == undefined)
console.log(null == 0)
console.log(" " == false)


