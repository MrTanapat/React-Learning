'use client';

import { useState, useEffect } from "react";
import { addTask, deleteTask, getTasks } from "./lib/taskService";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  // Download Task from Database (Firebase)
  useEffect(() => {
    async function fetchData() {
      const data = await getTasks();
      setTasks(data);
    }
    fetchData();
  }, []);

  // Add Task to Database
  const handleAddTask = async () => {
    if (!input.trim()) return; // Protect Null Task
    await addTask({ text: input });
    setInput(""); // Clear Input
    setTasks(await getTasks()); // Reload Task
  };

  // Delete Task
  const handleDeleteTask = async (id) => {
    await deleteTask(id);
    setTasks(await getTasks());
  };

  return (
    <div className="min-h-screen bg-grey-100 flex items-center justify-center">
      <div className="bg-gray-50 p-6 rounded-lg shadow-lg w-96">
        <h1 className="text-xl font-bold text-center mb-4">Todo List</h1>
        <div className="flex mb-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow border p-2 rounded-lg"
            placeholder="Enter task..."
          />
          <button onClick={handleAddTask} className="bg-emerald-700 text-white hover:bg-emerald-500 ms-3 px-4 rounded-lg">
            Add
          </button>
        </div>
        <ul>
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between items-center bg-emerald-50 hover:bg-green-100 p-2 rounded-lg mb-2">
              {task.text}
              <button onClick={() => handleDeleteTask(task.id)} className="text-red-400 hover:text-red-700"> {/* ✅ ส่ง id ไปให้ handleDeleteTask */}
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
