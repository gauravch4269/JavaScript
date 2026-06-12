//Functions - Decleration
// function sayMyName(){
//     //definition
// }

function sayMyName(){
    console.log("hello function");
}
// sayMyName() - call for execution

// function sum(number1,number2){
//     console.log(number1+number2) ;
// }
// const result = sum(3,5) // give undefined if we print result

function sum(number1,number2){
    return number1+number2 ;
}
const result = sum(3,5)
console.log(result)

function loginUserMessage(username){
    if(!username){  // means(or can be written as) - if(username)==undefined
        console.log("Please enter a username");

    }
    return `${username} hello`
}
console.log(loginUserMessage()) // print the message

// // can be give default value
// function loginUserMessage(username="Gaurav"){
//     if(!username){  // means(or can be written as) - if(username)==undefined
//         console.log("Please enter a username");

//     }
//     return `${username} hello`
// }

// Jab kitne Parameter honge ye nhi pata -- use Rest operator ...
function calculateCartPrice(...num1){
    return num1 // Array ke form me return karega
}
console.log(calculateCartPrice(200,500,600,700)) // ye shopping me cart ke liye use kiya jata hai jab input fix nhi hota hai

//How Object is pass in the Function
const user = {
    username : "Gaurav",
    price : 199

}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleObject(user)
//handleObject({ // write object })

// Similarly array is also pass in function
const myarray = [1,2,3,4,5]
function returnSecondValue(getarray){
    return getarray[1]
}
console.log(returnSecondValue(myarray))