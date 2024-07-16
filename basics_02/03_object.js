// object literals

const mySym = Symbol("key1")
const jsUser = {
    name: "Rahul",
    age: 15,
    mail: "rahul@gmail.com",
    phoneNum: 7896541230,
    [mySym]: "myKey",
}

console.log(jsUser.name); // object print method 1 
console.log(jsUser["age"]); // object print method 2 
console.log(jsUser[mySym]);

// Object.freeze(jsUser)

jsUser.greeting = function(){
    console.log("hello js user");
}
jsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());