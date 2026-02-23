import React, { useState } from "react";

function TaskForm({ addTask }) {
  const [taskName, setTaskName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (taskName && dueDate) {
      const newTask = {
        id: Date.now(),
        name: taskName,
        dueDate: dueDate,
        description,
        completed: false,
      };
      addTask(newTask);

      setTaskName("");
      setDueDate("");
      setDescription("");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="task-form">
        <h2>Add New Task</h2>
        <div className="form-group">
          <input
            type="text"
            placeholder="Task Name"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Description (optional)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit" className="btn-add">
          Add Task
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
