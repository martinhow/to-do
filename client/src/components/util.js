
export function toggleTodo (id, todos) {
  const newTodos = [...todos]
  const todo = newTodos.find(todo => todo.id === id)
  todo.complete = !todo.complete;
  return newTodos;
};
