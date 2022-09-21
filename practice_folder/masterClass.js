x = 100;
let result = x + x;
let correct = x * x;
x = 15;
console.log(x);
console.log(result);

// If and else.
savedPassword = "colinDecorce";
savedUsername = "Colin Decorce";

loginPasswordInput = "colinDecorce";
loginUsernameInput = "Colin Decorce";

if (savedPassword === loginPasswordInput && savedUsername === loginUsernameInput){
    console.log("Log in successful")
}else if(savedPassword !== loginPasswordInput && savedUsername !== loginUsernameInput){
    console.log("Your inputs are incorect")
}else if (savedPassword !== loginPasswordInput){
    console.log("Please recheck your password")
}else if (savedUsername !== loginUsernameInput){
    console.log("Please recheck your Username")
}else{
    console.log("Login failed")
}

// Objects
const hold = (x) => console.log(x);

const obj = {
    message: "They can be added to the objects like variable",
    take(x){console.log(x)},
    func: hold,
    collect: (x) =>{console.log(x)},
}

obj.take("benji")
obj.func("olukoya")
obj.collect("judith")
console.log(obj.message)

