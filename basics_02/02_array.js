const oldFriend = ["naveen", "pawan", "ankit"];
const newFrined = ["prakash", "hemant", "goyal"];

// oldFriend.push(newFrined);
// oldFriend.concat(newFrined);
// const allFriend = oldFriend.concat(newFrined); // merge two array use concat operator
const allFriend = [...oldFriend, ...newFrined]; // merge two array use spread operator

// console.log(allFriend);


console.log(Array.isArray("rahul")); // The Array.isArray() static method determines whether the passed value is an Array.
console.log(Array.from("rahul")); // Array.from -> convert into array

let point_01 = 10;
let point_02 = 20;
let point_03 = 30;


console.log(Array.of(point_01, point_02, point_03));

