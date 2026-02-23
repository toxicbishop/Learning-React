import React, { useState, useEffect } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import Filter from "./Filter";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("reminder-tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("reminder-tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "not-completed") return !task.completed;
    return true;
  });

  return (
    <div className="App">
      <header className="app-header">
        <h1>Task Reminder</h1>
        <p>Stay organized and productive</p>
      </header>
      <main className="app-main">
        <div className="layout-grid">
          <section className="form-section">
            <TaskForm addTask={addTask} />
          </section>
          <section className="list-section">
            <Filter setFilter={setFilter} currentFilter={filter} />
            <TaskList tasks={filteredTasks} setTasks={setTasks} />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
