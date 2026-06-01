// const score = 400

// const balance = new Number(100) //explicitly defined Number by object
// console.log(balance.toString());
// console.log(balance.toFixed(2));

// const otherNumber = 23.89565
// console.log(otherNumber.toPrecision(3)); //23.9

// const othernum = 123.89565
// console.log(othernum.toPrecision(3)); //124

// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); // default US standard
 
// ********************MATHS****************************
// console.log(Math);
// console.log(Math.abs(4));
// console.log(Math.round(4.6)); // round off = 5
// console.log(Math.ceil(4.6)); //5 - if 4 se jyada hua to 5
// console.log(Math.floor(4.6)); //4 - only integer part
// console.log(Math.min(4,5,6));
// console.log(Math.max(4,6,8,96));


console.log(Math.random());
console.log((Math.random()*10)+1);

const min = 10 
const max = 20
console.log(Math.random()*(max-min+1)+10);
console.log(Math.floor(Math.random()*(max-min+1))+min) //give single random value in range