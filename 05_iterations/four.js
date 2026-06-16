// iteration on object

const myobject = {
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift by apple'
}
// here we use for in loop  
// for (const key in myobject) {
//      console.log(key);
// }  
// for (const key in myobject) {
//     console.log(myobject[key]);
// }

const programming = ['js','rb','py','java','cpp']
for(const val in programming){ // here val is index
    console.log(val);
    console.log(programming[val])
}

// for in loop not use in Map because Map is not iterable