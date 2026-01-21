import React from "react";
import { FaEdit, FaTrash, FaCheck, FaClock } from "react-icons/fa";

const TodoItem = ({ todo, onToggle, onEdit, onDelete }) => {
  return (
    <div className="bg-white border border-purple-200 rounded-xl p-4 shadow-sm hover:shadow-md transition">

      <div className="flex items-center justify-between">

        {/* Left */}
        <div className="flex items-center gap-3 flex-1">

          {/* Checkbox */}
          <button
            onClick={() => onToggle(todo.id)}
            className={`w-6 h-6 rounded border-2 flex items-center justify-center 
              ${
                todo.completed
                  ? "bg-purple-600 border-purple-600 text-white"
                  : "border-purple-300 hover:border-purple-500"
              }`}
          >
            {todo.completed && <FaCheck size={12} />}
          </button>

          {/* Text */}
          <div>
            <h3
              className={`font-semibold ${
                todo.completed ? "line-through text-gray-500" : "text-gray-800"
              }`}
            >
              {todo.title}
            </h3>

            <p
              className={`text-sm ${
                todo.completed ? "line-through text-gray-400" : "text-gray-600"
              }`}
            >
              {todo.description}
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-2">

          <span className="px-3 py-1 rounded-full text-xs bg-purple-100 text-purple-700">
            {todo.priority}
          </span>

          <span className="flex items-center text-xs text-gray-500">
            <FaClock className="mr-1" />
            {todo.dueDate}
          </span>

          <button
            onClick={() => onEdit(todo)}
            className="text-purple-600 hover:text-purple-800"
          >
            <FaEdit size={14} />
          </button>

          <button
            onClick={() => onDelete(todo.id)}
            className="text-red-600 hover:text-red-800"
          >
            <FaTrash size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
