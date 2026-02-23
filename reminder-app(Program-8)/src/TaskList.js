import React from "react";

function TaskList({ tasks, setTasks }) {
  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="task-list-container">
      {tasks.length > 0 ? (
        <ul className="task-list">
          {tasks.map((task) => (
            <li
              key={task.id}
              className={`task-item ${task.completed ? "completed" : ""}`}>
              <div className="task-content">
                <h3>{task.name}</h3>
                <p className="due-date">📅 Due: {task.dueDate}</p>
                {task.description && (
                  <p className="description">{task.description}</p>
                )}
                <p className="status">
                  Status:{" "}
                  <span>{task.completed ? "Completed" : "Pending"}</span>
                </p>
              </div>
              <div className="task-actions">
                <button
                  className={`btn-toggle ${task.completed ? "undo" : "complete"}`}
                  onClick={() => toggleTaskCompletion(task.id)}>
                  {task.completed ? "Undo" : "Complete"}
                </button>
                <button
                  className="btn-delete"
                  onClick={() => deleteTask(task.id)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-tasks">No tasks found. Add a task to get started!</p>
      )}
    </div>
  );
}

export default TaskList;
