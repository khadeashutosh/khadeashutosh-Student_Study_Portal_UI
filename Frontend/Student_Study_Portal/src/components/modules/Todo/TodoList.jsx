import React, { useState } from "react";
import Swal from "sweetalert2";
import SearchBar from "../../common/SearchBar";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [todos, setTodos] = useState([]); // STATIC — empty
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingTodo, setEditingTodo] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedPriority, setSelectedPriority] = useState("all");

  const filteredTodos = todos.filter(todo => {
    const matchesSearch =
      todo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      todo.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      selectedStatus === "all" ||
      (selectedStatus === "completed" && todo.completed) ||
      (selectedStatus === "pending" && !todo.completed);

    const matchesPriority =
      selectedPriority === "all" || todo.priority === selectedPriority;

    return matchesSearch && matchesStatus && matchesPriority;
  });

  const handleCreateTodo = (todoData) => {
    setTodos([
      ...todos,
      { ...todoData, id: Date.now(), createdAt: new Date().toISOString() },
    ]);
    Swal.fire({
      icon: "success",
      title: "Todo Added",
      text: "Your todo has been added successfully!",
    });
    setShowForm(false);
  };

  const handleEditTodo = (todo) => {
    setEditingTodo(todo);
    setShowForm(true);
  };

  const handleDeleteTodo = (id) => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      text: "This action cannot be undone!",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setTodos(todos.filter((todo) => todo.id !== id));
        Swal.fire("Deleted!", "Your todo has been deleted.", "success");
      }
    });
  };

  const handleToggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="w-full min-h-screen overflow-y-auto bg-gradient-to-br from-[#f7c6ff] via-[#f5b4d4] to-[#acd9ff] p-6 flex justify-center">

      {/* MAIN WHITE CONTAINER */}
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl p-8">

        <h1 className="text-3xl font-bold text-purple-700 mb-6 text-center">
          Todo Manager
        </h1>

        {/* FORM PAGE */}
        {showForm ? (
          <TodoForm
            todo={editingTodo}
            onSave={handleCreateTodo}
            onCancel={() => {
              setShowForm(false);
              setEditingTodo(null);
            }}
          />
        ) : (
          <>
            {/* Search + Filters + Add */}
            <div className="bg-white p-6 rounded-xl shadow-sm border mb-6">
              <div className="flex flex-col md:flex-row gap-4">

                <div className="flex-1">
                  <SearchBar
                    placeholder="Search todos..."
                    value={searchTerm}
                    onChange={setSearchTerm}
                  />
                </div>

                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="px-4 py-3 bg-white border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-purple-400"
                >
                  <option value="all">All Status</option>
                  <option value="pending">Pending</option>
                  <option value="completed">Completed</option>
                </select>

                <select
                  value={selectedPriority}
                  onChange={(e) => setSelectedPriority(e.target.value)}
                  className="px-4 py-3 bg-white border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-purple-400"
                >
                  <option value="all">All Priorities</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>

                <button
                  onClick={() => setShowForm(true)}
                  className="bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 text-white px-4 py-3 rounded-lg shadow-md hover:opacity-90 transition"
                >
                  Add Todo
                </button>
              </div>
            </div>

            {/* Todo List */}
            <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scroll">
              {filteredTodos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggle={handleToggleTodo}
                  onEdit={handleEditTodo}
                  onDelete={handleDeleteTodo}
                />
              ))}
            </div>

            {filteredTodos.length === 0 && (
              <p className="text-center text-purple-700 mt-8">
                No todos found. Add your first todo!
              </p>
            )}
          </>
        )}
      </div>

      {/* Scrollbar Style */}
      <style>
        {`
          .custom-scroll::-webkit-scrollbar {
            width: 8px;
          }
          .custom-scroll::-webkit-scrollbar-thumb {
            background: linear-gradient(to bottom, #c084fc, #f472b6, #67e8f9);
            border-radius: 10px;
          }
        `}
      </style>
    </div>
  );
};

export default TodoList;
