//forEach, map, filter

const todos = [
    {
        id: 1,
        text: "The task is completed",
        isCompleted: true
    },
    {
        id: 2,
        text: "Meet with boss",
        isCompleted: true
    },
    {
        id: 3,
        text: "Fix an appointment",
        isCompleted: false
    }
]

//forEach method
// It will loop through every element of the array

todos.forEach(function (todo) {
    //console.log(todo.text)
})


// map 
// It will return a new array from the original array, so we are usually keep it within a variable

let todoText = todos.map(function (todo) {
    return todo.text
})

//console.log(todoText)


// ************** Filter *************

let todoIsCompleted = todos.filter(function (todo) {

    return todo.isCompleted === true
}).map(function (todoText) {
    return todoText.text
})

console.log(todoIsCompleted)


