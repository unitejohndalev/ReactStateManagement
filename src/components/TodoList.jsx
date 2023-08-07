import React from "react";
import AddTodo from "./AddTodo";
import { useTodoStore } from "../stores/useTodoStore";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useTodoStore((state) => state.todos);
  return (
    <div>
      <h1>Todo List using Zustand!</h1>
      <AddTodo />
      <div>
        {todos.length > 0 &&
          todos.map((todo, index) => <TodoItem key={index} todo={todo} /> )}
      </div>
    </div>
  );
};

export default TodoList;
