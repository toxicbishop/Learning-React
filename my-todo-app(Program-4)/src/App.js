import React, { useState } from "react";
import "./App.css";

const ToDoFunction = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  return (
    <div className="todo-container">
      <h2 className="todo-header">To-Do List</h2>

      <div className="todo-input-wrapper">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task..."
          className="todo-input"
        />
        <button className="add-task-button" onClick={addTask}>
          Add Task
        </button>
      </div>

      <ul className="todo-list">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`todo-item ${task.completed ? "completed" : ""}`}>
            <span
              className="task-text"
              onClick={() => toggleTaskCompletion(task.id)}>
              {task.text}
            </span>
            <button
              className="delete-button"
              onClick={() => deleteTask(task.id)}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoFunction;
