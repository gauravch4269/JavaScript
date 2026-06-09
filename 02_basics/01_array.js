//Array 
const arr = [1,2,3,4,5,6,7]
const myarr = new Array(1,2,3,4,5,6,7)

// in array at brrowser proptotype milta hai means property

// console.log(arr[0]); // indexing is possible

// // Array Methods
// arr.push(8) // add value at last
// console.log(arr);

// arr.pop()// remove last value

// arr.unshift(9) //add value at start and shift other value - complicated
// arr.shift() // ye upar wale 9 ko hata dega

//to check no. is present or not
// console.log(arr.includes(9)); // check 9 is present or not and return type is boolean
// console.log(arr.indexOf(9)) // -1

// const arr3 = arr.join() // convert the element to string , seperated

//slice and splice

// myarr = new Array(1,2,3,4,5,6,7)
console.log("A",myarr)  //orginal array

const myn1 = myarr.slice(1,3)

console.log(myn1); //slice array 
console.log("B", myarr);// after slice orginal array - not manipulate the org array

const myn2 = myarr.splice(1,3)
console.log("C",myarr);// splice array
console.log(myn2); // after splice original array - manipulate org array

