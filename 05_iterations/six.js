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
const newNums = myNum.filter((num) => {
    return num <4
})
console.log(newNums)

// // 12:42 - video 30 - [{},{},..] - filter the which come from database
// const userBook = books.filter((bk) => bk.genre == "history")