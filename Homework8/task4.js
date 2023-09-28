
async function getUserById (id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const user = await response.json()
    console.log(user)
}
getUserById(1)


async function getTodoBodyId (id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    const todo = await response.json()
    console.log(todo)
}
getTodoBodyId(4)