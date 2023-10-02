
async function getUserById (id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const user = await response.json()
    return user
}
getUserById(1).then((user) => console.log(user));


async function getTodoBodyId (id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    const todo = await response.json()
    return todo
}
getTodoBodyId(5).then((todo) => console.log(todo));