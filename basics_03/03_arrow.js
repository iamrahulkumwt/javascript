const user = {
    userName: "rahul",
    id: 120,

    welcomeMessage: function(){
        console.log(`Hello ${this.userName}, welcome to this website.`);
        // console.log(this);
    }
}

// user.welcomeMessage()
// user.userName = "rahul kumawat"
// user.welcomeMessage()

// function className() {
//     let studentName = "rahul"
//     console.log(this.studentName);
// }
// className()

// const subject = function () {
//     let subjectName = "javascript"
//     console.log(this.subjectName);
// }
// subject()

// const play = () => {
//     let game = "pubg"
//     console.log(this.game);
// }
// play()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "rahul"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()