// some mor loops
// 1. for of
// const arr = [1,2,3,4,5]
// for (const num of arr) {
//     console.log(num)
    
// }
// Map
const map = new Map()
map.set('IN',"India")
map.set('USA',"United states of america")
map.set('Fr',"France")
//console.log(Map)
// for (const key of map) {  // gives in array formate
//     console.log(key)
    
// }
for (const [key,value] of map) {
    console.log(key,':-',value);
    
}