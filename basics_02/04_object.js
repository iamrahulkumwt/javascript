// singleton 

// const instaUser = new Object() // singleton object

const instaUser = {}

instaUser.name = "Rahul Kumawat"
instaUser.userId = "001"
instaUser.isLogedIn = true

// console.log(instaUser);

const regulerUser = {
    id: "01",
    name: {
        fullName: {
            firstName: "rahul",
            number: "8523697410",
        },
    },

}

// console.log(regulerUser.name.fullName.firstName);

const obj1 = {
    1: "rahul",
    2: "kumawat",
}

const obj2 = {
    3: "dinesh",
    4: "kumawat",
}

// const obj3 = Object.assign({}, obj1, obj2) // merge two array use Object.assign()
const obj3 = {...obj1, ...obj2}

// console.log(obj3);





const subject = {
    name: "english",
    teacherName: "mayank",
    price: "free",
}

const {price} = subject
console.log(price);



