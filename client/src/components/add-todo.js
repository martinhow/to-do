import React, { useRef } from 'react';
import uuidv4 from '../uuid/v4';

function AddTodo({ setTodos }) {
  const todoNameRef = useRef()

  function handleAddTodo(evnt) {
    const name = todoNameRef.current.value;
    if (name === '') return
    console.log(name);
    setTodos(prevTodos => {
      return [...prevTodos, {id: uuidv4, name: name, complete: false}]
    })
  }

  return (
    <div>
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button>Complete Todo</button>
      <button>Clear All</button>
    </div>
  )
}

export default AddTodo;