import React, { useState } from "react";
import { FaTimes, FaSave } from "react-icons/fa";

const TodoForm = ({ todo, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    title: todo?.title || "",
    description: todo?.description || "",
    priority: todo?.priority || "medium",
    dueDate: todo?.dueDate || "",
    completed: todo?.completed || false,
  });

  const priorities = ["low", "medium", "high"];

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="bg-white border border-purple-200 p-8 rounded-2xl shadow-xl">

      <h2 className="text-2xl font-bold text-purple-700 mb-6 text-center">
        {todo ? "Edit Todo" : "Create New Todo"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label className="text-purple-700 font-semibold mb-1 block">
            Title
          </label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            className="w-full px-4 py-3 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-400 bg-white"
            required
          />
        </div>

        <div>
          <label className="text-purple-700 font-semibold mb-1 block">
            Description
          </label>
          <textarea
            rows={3}
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            className="w-full px-4 py-3 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-400 bg-white"
          ></textarea>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div>
            <label className="text-purple-700 font-semibold mb-1 block">
              Priority
            </label>
            <select
              value={formData.priority}
              onChange={(e) =>
                setFormData({ ...formData, priority: e.target.value })
              }
              className="w-full px-4 py-3 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-400 bg-white"
            >
              {priorities.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-purple-700 font-semibold mb-1 block">
              Due Date
            </label>
            <input
              type="date"
              value={formData.dueDate}
              onChange={(e) =>
                setFormData({ ...formData, dueDate: e.target.value })
              }
              className="w-full px-4 py-3 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-400 bg-white"
            />
          </div>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            checked={formData.completed}
            onChange={(e) =>
              setFormData({ ...formData, completed: e.target.checked })
            }
            className="w-5 h-5 border border-purple-300 rounded checked:bg-purple-600"
          />
          <label className="ml-2 text-purple-700">Mark as completed</label>
        </div>

        <div className="flex justify-end gap-3 mt-6">

          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-3 border border-purple-300 rounded-lg text-purple-700 bg-white hover:bg-purple-50 flex items-center"
          >
            <FaTimes className="mr-2" /> Cancel
          </button>

          <button
            type="submit"
            className="px-4 py-3 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 text-white rounded-lg shadow-md hover:opacity-90 flex items-center"
          >
            <FaSave className="mr-2" /> Save Todo
          </button>
        </div>

      </form>
    </div>
  );
};

export default TodoForm;
