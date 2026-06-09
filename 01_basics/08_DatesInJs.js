// Date

// creating a date object
let myDate = new Date()
// console.log(myDate);  //non readable
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.getMonth()); // from 0 - jan
// console.log(myDate.getMonth() + 1); // normal
// console.log(myDate.getDay());  // start from monday - 1


// declare a specific date
// let myCreatedDate = new Date(2026,5,4)
// console.log(myCreatedDate.toString());

// let myCreatedDate = new Date(20023,5,4,5,3)
let myCreatedDate = new Date()
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now() // For timestamp
console.log(myTimeStamp)

console.log(myCreatedDate.getTime());  //give in ms so that we can compare with other

console.log(Math.floor(Date.now()/1000));
