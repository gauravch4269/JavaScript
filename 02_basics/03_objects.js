// onjects literals -- no singleton object
//const JsUser = {} - for obect literals
// object.create  -- constructor method

// const JsUser = {
//     name:"gaurav",
//     age:18,
//     location:"Lucknow",
//     email:"google.com",
//     isloggedIn:false,
//     LatsLoginDays:["moday","tuesday"]
// }
// //To access objects
// console.log(JsUser.email); // Methid - 1
// console.log(JsUser["email"]); // Method - 2

// symobol

const mysym = Symbol("key1")

const JsUser = {
    name:"gaurav",
    "fullname":"gsursv chauhan",
    age:18,
    [mysym]:"mykey1",  // mysym:"mykey1" ye symbol nhi hai
    location:"Lucknow",
    email:"google.com",
    isloggedIn:false,
    LatsLoginDays:["moday","tuesday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["fullname"]); // can't access by . dot method because of string
// console.log(JsUser[mysym]); // accessing symbol

// overide the values
JsUser.email = "gaurav2412117.google.com"
// freez the value so that can't change
//Object.freeze(Jsuser) // - object se krna padega

//can be add function - freeze se hatake object ko krna

JsUser.greeting = function(){
    console.log("Hello EveryOne");
}
JsUser.greeting2 = function(){
    console.log(`Hello EveryOne,${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());
// // - console.log(JsUser) -- {
//   name: 'gaurav',
//   fullname: 'gsursv chauhan',
//   age: 18,
//   location: 'Lucknow',
//   email: 'gaurav2412117.google.com',
//   isloggedIn: false,
//   LatsLoginDays: [ 'moday', 'tuesday' ],
//   greeting: [Function (anonymous)],
//   greeting2: [Function (anonymous)],
//   Symbol(key1): 'mykey1'
// }

