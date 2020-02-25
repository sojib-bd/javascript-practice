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


//**************** Different kind of Methods */

let str = "hello world!"

console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.substring(0, 5).toUpperCase());

let greeting = "hello world!"

console.log(greeting.split(''))

let multipleString = "template, technology, IT, company"

console.log(multipleString.split(', '))

//************************ Array ****************** */
// is a variable that hold bunch of data type

const fruits = ['apple', 'mango', 'banana'];

//Adding something in the end of the array
fruits.push('orange')
console.log(fruits)

//Adding something in the beginning 

fruits.unshift('strawberry')
console.log(fruits)

// Delete the last one 
fruits.pop()
console.log(fruits)

//Find the index of banana

console.log(fruits.indexOf('banana'))


// object 

const person = {
    firstName: "jon",
    lastName: 'Doe',
    age: 30,
    hobbies: ['movies', 'music', 'game'],
    address: {
        city: 'boston'
    }
}

// Destructure
const { firstName, lastName } = person
console.log(firstName, lastName)

// arguments or operator

let a = 1,
    b = 3;

alert(b - a)