const marveli_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

//marveli_heros.push(dc_heros) // ye dc_heros wala array as a element ban jayega marvel_heros ke andar 

// console.log(marveli_heros)
// console.log(marveli_heros[3][1]) //flash
new_arr=marveli_heros.concat(dc_heros) // concatination
console.log(new_arr);

//const all_new_heros = [...marveli_heros,...dc_heros] // more than one array bhi add sakte hai
// [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ] same as concat

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)

//covert To array
console.log(Array.isArray("Gaurav")) // check array or not - false
console.log(Array.from("Gaurav")) // covert to array

//Intresting Case - If we give Object as a argumnet
console.log(Array.from({name : "Gaurav"})) // we have to give ki key ko convert krna hai ya value ko

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));