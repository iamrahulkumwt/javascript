const car = ["swift", "BMW", "audi", "alto"]

// car.forEach( (car) => {
//     console.log(car);
// } )

// car.forEach(function(car){
//     console.log(car);
// })

// car.forEach((car, index, arr)=> {
//     console.log(car, index, arr);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )