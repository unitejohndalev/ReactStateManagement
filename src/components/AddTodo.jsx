import React, { useState } from "react";
import { useTodoStore } from "../stores/useTodoStore";

const AddTodo = () => {
  const [newTodo, setNewTodo] = useState("");
  const addTodo = useTodoStore(state => state.addTodo);

  const handleClick = () => {
    addTodo(newTodo);
    setNewTodo("")
  }
  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button
      onClick={handleClick}
      >ADD Todo</button>
    </div>
  );
};

export default AddTodo;
