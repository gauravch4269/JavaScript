// object constructor -- singleton object
const tinderUser = new Object()

//const tinderUser = {} - no singleton object (object literals)

tinderUser.id = "123abc"
tinderUser.name = "xeros"
tinderUser.isLoggedIn = false

// object ke andar objects bhi use kar sakte hai
const regularUser = {
    email:"hello.gmail.com",
    fullname:{
        userfullname: {
            firstname:"gaurav",
            lastname:"chauhan"
        }
    }

}

//console.log(regularUser.fullname.userfullname.firstname);

// //combining objects -- document - object assign mdn - seach on google
// const obj1 = {1:"a",2:"b"}
// const obj2 = {3:"c",4:"d"}
// const obj3 = Object.assign({},obj1,obj2); // merge
// console.log(obj3)

// // 90% we Spread operator as array
// const obj3 = {...obj1,...obj2}


//use this jab databae se value aayegi
// array of objects ke form me aata hai
const user = [
    {
        id:1,
        email:"hello.gmail.com"
    },
    {

    },
    {}
]

user[0].email //yahan dot method use karenge
console.log(tinderUser)

// access only object keys by .keys() method
console.log(Object.keys(tinderUser)) // give in array form
console.log(Object.values(tinderUser)) // for value -- same array form
console.log(Object.entries(tinderUser)) // all key and value are as element in a array

//check value present or not
console.log(tinderUser.hasOwnProperty('isLoggedIn'))


// object part - 3
// de-structuring
const course = {
    coursename:"JS in hindi",
    price:"999",
    courseinstructor:"hitesh"
}
// course.courseinstructor
// by syntacticalSugar - syntax can be change
// const {courseinstructor} = course
// console.log(courseinstructor);

// further apne hisab se bhi kar sakte hai
const {courseinstructor:instructor} = course //
console.log(instructor);

//JSON format - object json format me hi bhejna hota hai

// api is tarah ho sakti hai
// {
//     "name":"hitesh",
//     "coursename":"JS in Hindi",
//     "price":"free"
// }

// is tarah ki array me objects me bhi api ho sakti hai
[
    {},
    {},
    {}
]