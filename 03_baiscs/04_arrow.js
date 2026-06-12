// const user = {
//     username:"hitesh",
//     price:999,
//     welcomeMessage:function(){
//         console.log(`${this.username}, welcome to website`);
//         console.log(this)
//     }
// }
// user.username() // hitesh, welcome to website
// user.username="sam" // change the current instance from hitesh to sam
// user.username() // now current instance is sam so - sam, welcome to website

// console.log(this)

//hamesha context jo hai vo object me hi kaam krta hai function me nhi
// function chai(){
//     let username = "hitesh"
//     console.log(this); // undefined
// }

// const chai = function(){
//     let username="hitesh"
//     console.log(this.username)
// }

//ARROW FUNCTION

// const chai = () => {
//     let username="hitesh"
//     console.log(this.username) // undefined
//     console.log(this) // {} - empty
// }

// () => {}
// const addTwo = (num1,num2) => {
//     return num1+num2
// }
// console.log(addTwo(3,4))

// By implicit Return
const addTwo = (num1,num2) => num1+num2
console.log(addTwo(3,4))

//Return object from arrow function - must use ()
const addtwo = (num1,num2) => ({username : "hitesh"})
console.log(addtwo(3,4)) // sername : 'hitesh'