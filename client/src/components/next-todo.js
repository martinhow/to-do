function NextTodo({ todo, todos, setTodos }) {

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete;
    setTodos(newTodos)
  }

  function handleClick() {
    toggleTodo(todo.id)
  }

  return (
    <div>
      <label>
        <input type="checkbox" checked={todo.complete} onChange={handleClick}/>
        {todo.name}
      </label>
    </div>
  )
}

export default NextTodo;