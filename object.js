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

//convert it into a JSON file

const todosJSON = JSON.stringify(todos);
console.log(todosJSON)
