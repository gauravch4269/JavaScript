const userEmail = "h@hitesh@ai"
if(userEmail){ // assume true value, if it is empty - false
    console.log("Got the user email")
}
else{
    console.log("Don't have user email");
} 
// in copy - truthy and falsy value written
const emptyobj = {}
if((Object.keys(emptyobj)).length === 0){
    console.log("Object is empty")
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// va1 = 5 ?? 10 // 5
// val1 = null ?? 10 // 10
val1 = undefined ?? 15 // 15 

// Terniary operator
const iceTeaPrice = 100
iceTeaPrice>=80?console.log("more than 80"):console.log("less than 80")