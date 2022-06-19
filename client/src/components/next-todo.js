import { toggleTodo } from "./util"

function NextTodo({ todo, todos, setTodos }) {

  function handleClick() {
    const newTodos = toggleTodo(todo.id, todos)
    setTodos(newTodos)
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