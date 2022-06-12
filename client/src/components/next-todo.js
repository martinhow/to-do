function NextTodo({ todo }) {
  return (
    <div>
      <label>
        <input type="checkbox" checked={todo.complete} />
        {todo.name}
      </label>
    </div>
  )
}

export default NextTodo;