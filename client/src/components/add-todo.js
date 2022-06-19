import React, { useRef } from 'react';
import { v4 as uuid } from 'uuid';

function AddTodo({ setTodos }) {
  const todoNameRef = useRef()

  function handleAddTodo(evnt) {
    var name = todoNameRef.current.value;
    if (name === '') return;
    setTodos(prevTodos =>
      [...prevTodos, {id: uuid(), name: name, complete: false}]
    );
    todoNameRef.current.value = '';
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