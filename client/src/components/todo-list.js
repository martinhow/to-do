import NextTodo from "./next-todo"

function TodoList({ todos }) {

  return (
    <div>
      {todos.map(todo =>
          <NextTodo
          todo = {todo}
          />)
      }
    </div>
  )
}

export default TodoList;