import { useTodoStore } from "../stores/useTodoStore";

/* eslint-disable react/prop-types */
const TodoItem = ({ todo }) => {
    const removeTodo = useTodoStore((state) => state.removeTodo)
  return (
    <div>
      <span>{todo}</span>
      <button
      onClick={() => removeTodo(todo)}
      >REMOVE</button>
    </div>
  );
};

export default TodoItem;
