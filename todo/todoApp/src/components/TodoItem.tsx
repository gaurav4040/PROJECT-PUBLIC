import React from "react";
import { Todo } from "../types";

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <div className="flex justify-between items-center bg-gray-100 rounded-lg p-3 transition hover:bg-gray-200">
      <span
        className={`cursor-pointer text-lg ${todo.completed ? "line-through text-gray-500" : "text-gray-800"}`}
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.text}
      </span>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="text-red-500 hover:text-red-700 transition"
      >
        ❌
      </button>
    </div>
  );
};

export default TodoItem;
