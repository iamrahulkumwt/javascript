// functions

function name() {
    console.log("rahul");
}
// name()

function addTwoNum(num1, num2) {
    // let result = num1 + num2
    // return result

    return num1 + num2
}
const result = addTwoNum(2, 5)

// console.log("Result:", result);








function addCartPrice(...num3) {
    return num3
}
// we user rest opretor(...)
// console.log(addCartPrice(100, 200, 300, 400));

const user = {
    userName: "rahul kumawat",
    phoneNum: 7894561230,
}

function handalObject(anyUser){
    console.log(`username is ${anyUser.userName} and user phone number is ${anyUser.phoneNum}`);
}
handalObject(user)

const myArray = [100, 200, 500]

function myArrayResult(getArray) {
    return getArray[2]
}
console.log(myArrayResult(myArray));