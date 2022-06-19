import NextTodo from "./next-todo"

function TodoList({ todos, setTodos }) {

  return (
    <div>
      {todos.map(todo =>
          <NextTodo todo={todo} todos={todos} setTodos={setTodos}/>)
      }
    </div>
  )
}

export default TodoList;