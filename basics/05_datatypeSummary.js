//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


//+++++++++++++++++++++++++++ */ memory in javascript +++++++++++++++++++++++++++

// There are two type of memory in javascript

// 1. Stack (Primitive)
// 2. Heap (Reference or Non-Primitive)


// 1. Stack (Primitive)

let myEmail = "rahul@gmail.com";
let myAnotherEmail = myEmail;
myAnotherEmail = "iamrahul@gmail.com";

console.log(myEmail);
console.log(myAnotherEmail);


// 2. Heap (Reference or Non-Primitive)

let userOne = {
    userName: "rahul",
    userLastName: "kumawat",
}

let userTwo = userOne;
userTwo.userName = "rahulKumawat"

console.log(userOne.userName);
console.log(userTwo.userName);