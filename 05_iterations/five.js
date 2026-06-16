// for each
const coding = ["js","ruby","java","python","cpp"]
// coding.forEach(function (val){
//     console.log(val);
// })
// can be use arrow function
// function  alag se likhkar bhi kar sakte hai
// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// parameter me item,index and arr bhi aa sakta hai
coding.forEach((item,index,arr) => {
    console.log(item,index,arr);
})

// accessing object in the array
// [{},{},..] -- Array of the objects

const mycoding = [
    {
        languagename: "javascript",
        languagefilename: "js"
    },
     {
        languagename: "java",
        languagefilename: "java"
    }, {
        languagename: "python",
        languagefilename: "py"
    }
]
mycoding.forEach((item) => {
    console.log(item.languagename);
    
})

// const newNum =[]
// const myNum = [1,2,3,4,5,6,7,8,9,10]
// // forEach loop does not return any value but w e can do by logic
// myNum.forEach((num) => {
//     if(num>4){
//         newNum.push(num);
//     }
// })

// filter - for returning and use condition
const myNum = [1,2,3,4,5,6,7,8,9,10]
const newNum = myNum.filter((num) => num<4)
// if we use {} than we create a scope so to return we use return
const newNum = myNum.filter((num) => {
    return num <4
})

// // 12:42 - video 30 - [{},{},..] - filter the which come from database
// const userBook = books.filter((bk) => bk.genre == "history")