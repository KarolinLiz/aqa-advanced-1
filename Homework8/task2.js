
// const getJsonFromResponce = (response) => response.json();
// const printData = (todo) => console.log('Received todo item', todo);

// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(getJsonFromResponce)
// .then(printData);

function getTodoBodyId(id) {
    return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then( (response) => response.json());
}
getTodoBodyId(1).then((value) => console.log(value));
getTodoBodyId(2).then((value) => console.log(value));
getTodoBodyId(4).then((value) => console.log(value));

function getUserById (id) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((response) => response.json());
}
 const promise = Promise.all([getUserById(1), getUserById(2), getUserById(3), getUserById(4), getUserById(5)]);
 promise.then((results) => console.log(results));


const promice = Promise.race([getUserById(1), getUserById(2), getUserById(3), getUserById(4), getUserById(5)]);
promice.then((value) => console.log(value));