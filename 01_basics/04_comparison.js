// console.log(2>1)
// console.log(2>=1)... etc give either true or false

console.log("2">1) // JS convert "2" in Number and compare with 1 and give true

console.log("02">1) //true

console.log(null>0)
console.log(null==0)
console.log(null>=0)
// Note => == and compare work differently and when we use comparison operator then 
//it convert null to Number i.e 0 and check
 

//strict check === it check value as well as datatype
//console.log("2"==2) give true bec "2" convert to number
// console.log("2"===2) give false bec it does not convert the the value into the Number