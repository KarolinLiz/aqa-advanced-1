 function getUserById (id) {
     return fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((response) => response.json());
 }
  const promise = Promise.all([getUserById(1), getUserById(2), getUserById(3), getUserById(4), getUserById(5)]);
  promise.then((results) => console.log(results));

function getFirstUserById (id) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((response) => response.json());
}
const promice = Promise.race([getFirstUserById(1), getFirstUserById(2), getFirstUserById(3), getFirstUserById(4), getFirstUserById(5)]);
promice.then((value) => console.log(value));