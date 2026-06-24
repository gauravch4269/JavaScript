const myNumbers = [1,2,3,4,5,6,7,8,9,10]
// const newNums=myNumbers.map((num => { // add 10 to each
//     return num+10
// }))

//Chaining - mean do teen method ek sath laga sakte hai
//const newNums = myNumbers.map().map() - first ka result second me jayega
const newNums = myNumbers
                .map((num) => num*10)
                .map((num) => num+1) // upar wale ka result isme aayega  

