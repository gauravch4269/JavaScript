// let a = 10
// const b = 20
// var c = 30

// if(true){
//     let a = 10
//     const b = 20
//     var c = 30
// }
// console.log(a) - error
// console.log(b) - error
//console.log(c) //- print the value 30
//Because-"No Block Scope"- Unlike let and const, variables declared with var 
// ignore block statements like if conditions or for loops.
// They are only contained by the function they are written inside.
//var is also allow Redecleration

// let a = 300
// if(true){
//     let a = 10
//     const b = 20
//     console.log(`INNER a:${a}`)
// }
// console.log(`OUTER a:${a}`)

//scope in function - child function(inner function) can access variable of outer/parent function
// function one(){
//     const username = "hutesh"
//     function two(){
//         const website = "youtube"
//         console.log(username); // print

//     }
//     //console.log(website) -- error bec website is out of block 
//     two()
// }
// one()

//***********************INTRESTING******************
// function addone(num){
//     return num + 1
// }
// addone(5)

// const addtwo = function(num){
//     return num + 2
// }
// addtwo(5)
console.log(addone(5)) //execute
function addone(num){
    return num + 1
}
console.log(addone(5)) //execute

console.log(addtwo(5)) // give error - Cannot access 'addtwo' before initialization -bec yaha function ek variable se declare kar rahe hai
const addtwo = function(num){
    return num + 2
}
//console.log(addtwo(5)) - here executed only
