// Data Type in JavaScript

/* 
    1.String type
    2.Number type
    3.Boolean type
    4.Null type
    5.Undefined
*/

const name = "sojib"
const age = 20
const rating = 4.5
const isCool = true
const x = null
const y = undefined
let z;

console.log(typeof name)
console.log(typeof age)
console.log(typeof rating)
console.log(typeof isCool)
console.log(typeof x)
console.log(typeof y)
console.log(typeof z)


// *********************  Concatenation  *****************

// old method
console.log('My name is ' + name + ' and I am ' + age + ' years old')

// new Method (ES6)

// Template string

console.log(`My name is ${name} and I am ${age} years old`)