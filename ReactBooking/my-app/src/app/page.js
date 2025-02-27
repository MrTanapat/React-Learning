'use client';

import { React, useState } from "react";
export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() !== "") {
      setTasks([...tasks, input]);
      setInput("");
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  }

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
          <button onClick={addTask} className="bg-emerald-700 text-white hover:bg-emerald-500 ms-3 px-4 rounded-lg">Add</button>
        </div>
        <ul>
          {tasks.map((tasks, index) => (
            <li key={index} className="flex justify-between items-center bg-emerald-50 hover:bg-green-100 p-2 rounded-lg mb-2">
                {tasks}
            <button onClick={() => removeTask(index)} className="text-red-400 hover:text-red-700">
              X
            </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}