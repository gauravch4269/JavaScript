// "" or ''
const name = "gaurav"
const repocount = 50
//console.log(name+repocount+"value")
console.log(`hello ${name} and repo count is %{repocount}`)

const gameName = new String('gaurav')  // here string is an obejct and it include many method

console.log(gameName)
console.log(gameName.__proto__);  // use to use method // this give {} object but this not empty it includes many method
// for example to using some methods
console.log(gameName.length);
console.log(gameName.toUpperCase()); // not change the original value  beacause is primitive DT
console.log(gameName.charAt(2)); // give index

const newString = gameName.substring(0,2);
console.log(newString)

const anotherString = gameName.slice(-4,0);
//trim - gameName.trim()  -- start/end space remove  

const url = "https://google/gaurav.com/guarav%20chauhan"
console.log(url.replace('%20','-'));

// split() - default on the basis of space -- to array
let a="a good-boy"
console.log(a.split('-'));