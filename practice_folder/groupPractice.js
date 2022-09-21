// Arrow functions.
// without parameters
let greetings = () =>{
    console.log("Good morning");
}
// With parameters
greetings();
let greeting = (x) =>{
    console.log(x);
}
greeting("Good afternoon"); 

let greet = x => console.log(x);
greet("Good")

let average = (a,b, c, d, e) => {
    console.log((a+b+c+d+e)/5)
}
average(2,3,4,5,6);