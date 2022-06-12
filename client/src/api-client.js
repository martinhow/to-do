const url = 'http://localhost:4000/events';

export const getTodos = () => {
  return fetch(url)
    .then(tds => tds.json())
    .catch(e => console.log(e))
}