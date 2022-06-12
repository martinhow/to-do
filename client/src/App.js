import React, { useState, useEffect } from "react"
//import { getTodos } from "./api-client";
import TodoList from "./components/todo-list";
import AddTodo from "./components/add-todo";

function App() {
  const [todos, setTodos] = useState([]);

  // useEffect(() => {
  //   getTodos()
  //     .then(tds => setTodos(tds)
  //     )
  // }, [])

  return (
    <>
      <h1>Martin's To Do List Today</h1>
      {todos.length > 0 && <TodoList todos={todos} />}
      <AddTodo setTodos={setTodos} />
    </>
  );
}

export default App;
