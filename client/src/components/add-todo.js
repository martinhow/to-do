import React, { useRef } from 'react';
import { v4 as uuid } from 'uuid';
import { postTodo } from "../api-client";

function AddTodo({ setTodos }) {
  const todoNameRef = useRef()

  function handleAddTodo(evnt) {
    var name = todoNameRef.current.value;
    if (name === '') return;

    const todoObject = {
      id: uuid(),
      name: name,
      complete: false
    }
    postTodo(todoObject)
    .then(newTodo => {
      setTodos(prevTodos =>
        [...prevTodos, newTodo]);
      todoNameRef.current.value = '';
    }).catch(error => console.log(error))
  }

  return (
    <div>
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  )
}

export default AddTodo;