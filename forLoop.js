
const people = ['Shoykot', 'Masum', 'Sojib', 'Sakib', 'Shuvo', 'Ridoy', 'Rafi', 'Sujon', 'Adnan']

for (let i = 0; i < people.length; i++) {

    if (people[i].charAt(0) === 'S') {
        //console.log(people[i])
    }
    else {
        //console.log('The letter is not in the list')
    }
}

// for of Loop
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

for (let todo of todos) {
    console.log(todo.id, todo.text)
}
