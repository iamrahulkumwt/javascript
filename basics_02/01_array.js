// array

// const myArry = [0, 1, 2, 3, 4]
// const myHero = ["krishna", "ram", "govind"]

// console.log(myArry[1]);
// console.log(myHero[2]);

// const myNewArry = new Array(0, 1, 2, 3, 4)

// console.log(myNewArry[2]);


// array method

const newArry = [0, 1, 2, 3, 4, 5]

newArry.push(6) // push method add new element in array in last 
newArry.pop() // pop method remove last element in array

newArry.unshift(7) // unshift method add new element in array in start
newArry.shift() // shift method remove start element in array

const newArry2 = newArry.join() // join() -> Adds all the elements of an array into a string, separated by the specified separator string.

// console.log(newArry);
// console.log(newArry2);


// slice and splice

console.log("1. ", newArry);

const newA = newArry.slice(1, 4) // in slice method Returns a copy of a section of an array
console.log("slice ", newA);

const newB = newArry.splice(1, 4) // in splice method Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
console.log(newArry)
console.log("splice ", newB);