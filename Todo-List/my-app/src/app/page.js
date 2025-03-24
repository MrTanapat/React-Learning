'use client';

import { useState, useEffect } from "react";
import { addTask, deleteTask, getTasks } from "./lib/taskService";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  // Download Task from Database (Firebase)
  useEffect(() => {
    async function fetchData() {
<<<<<<< HEAD
<<<<<<< HEAD
      const data = await getTasks();
=======
      const data = await getTasks(); 
>>>>>>> fc57ee3 (Add Laundry Project)
=======
      const data = await getTasks(); 
>>>>>>> 4daaa8b93b08a20a14eb447028192193c6536add
      setTasks(data);
    }
    fetchData();
  }, []);

  // Add Task to Database
  const handleAddTask = async () => {
    if (!input.trim()) return; 
    await addTask({ text: input });
    setInput(""); // 
    setTasks(await getTasks()); 
  };

  // Delete Task
<<<<<<< HEAD
<<<<<<< HEAD
  const handleDeleteTask = async (id) => {
=======
  const handleDeleteTask = async (id) => { 
>>>>>>> fc57ee3 (Add Laundry Project)
=======
  const handleDeleteTask = async (id) => { 
>>>>>>> 4daaa8b93b08a20a14eb447028192193c6536add
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
              <button onClick={() => handleDeleteTask(task.id)} className="text-red-400 hover:text-red-700">
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
