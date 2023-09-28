class TodoController {
    constructor(baseUrl) {
        this._baseUrl = baseUrl
    }
   async getTodoById(id) {
    const response = await fetch(`${this._baseUrl}/todos/${id}`)
    const todo = await response.json()
    return todo
   }
}

const controller = new TodoController("https://jsonplaceholder.typicode.com")
controller.getTodoById(1).then((value) => console.log(value))