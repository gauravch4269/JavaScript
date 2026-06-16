// if statement
// if(condition){

// }
// else(otherwise){

// }
// nesting
// if,else if, else
const userLoggedIn = true
const debitcard = true
const LoggedInFromGoogle = false
const loggedInFromEmail = true 
if(userLoggedIn && debitcard){
    console.log("allow to buy");
}
if(LoggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in");
}
