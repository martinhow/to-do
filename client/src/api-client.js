const url = 'http://localhost:4000/todos';

export const getTodos = () => {
  return fetch(url)
    .then(tds => tds.json())
    .catch(e => console.log(e))
}

export const postTodo = (td) => {
  return fetch(url, {
    method: 'POST',
    headers: {"Content-Type": 'application/json'},
    body: JSON.stringify(td)
  })
  .then(result => result.json())
  .catch(error => console.log(error))
}