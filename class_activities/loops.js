// console.log("Loops");
// // Types of loop'
// // 1.  Do while.
// // 2. Do while
// // 3. For loop

// let number = 0;
// do {
//     console.log(number)
//     number = number + 1;
// }while (number <= 10);

// // Printing out even numbers from 0 to 10.
// do {
//     console.log(number)
//     number = number + 1;
// }while (number <= 10);
let n = 0
do {
    if (n % 2 == 0) {
        console.log(n)
        n += 2
    } else {
        console.log("Error")
    }
} while (n <= 20);
or:
m = 0;
console.log("Second way")
do {
    if (m % 2 == 0){
        console.log(m)
    }
    m += 1;
} while (m <= 20);

// While loop
let number = 1;
let counter = 0;
while (counter < 10) {
    number = number * 2;
    counter++
    console.log("number", number)
    console.log("counter", counter)
}

// For loop
for (let number = 1; number < 10; number*=2) {
    console.log(number)
}