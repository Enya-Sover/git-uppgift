import React, { useState } from "react";

let Todo = () => {
  const [todo, setTodo] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [completed, setCompleted] = useState([]);

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      const updatedTodo = [...todo, newTodo];
      setTodo(updatedTodo);
      setNewTodo("");
    }
  };

  const removeTodo = (index) => {
    setTodo(todo.filter((_, i) => i !== index));
    setCompleted(completed.filter((i) => i !== index));
  };

  const toggleCompleted = (index) => {
    if (!completed.includes(index)) {
      setCompleted([...completed, index]);
    } else {
      setCompleted(completed.filter((i) => i !== index));
    }
  };

  return (
    <>
      <h1>Todo</h1>
      <input
        type="text"
        placeholder="Todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>

      {todo.map((todos, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            checked={completed.includes(i)}
            onChange={() => toggleCompleted(i)}
          />
          <span
            style={{
              textDecoration: completed.includes(i) ? "line-through" : "none",
              color: "green",
              marginLeft: "10px",
            }}
          >
            {todos}
          </span>
          <button onClick={() => removeTodo(i)} style={{ marginLeft: "10px" }}>
            Remove
          </button>
        </div>
      ))}
    </>
  )
}

export default Todo;

