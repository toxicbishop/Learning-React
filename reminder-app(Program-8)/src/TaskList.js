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
    <div>
      {tasks.length > 0 ? (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <h3>{task.name}</h3>
              <p>Due Date: {task.dueDate}</p>
              {task.description && <p>Description: {task.description}</p>}
              <p>Status: {task.completed ? "Completed" : "Not Completed"}</p>
              <button onClick={() => toggleTaskCompletion(task.id)}>
                Toggle Completion
              </button>
              <button onClick={() => deleteTask(task.id)}>Delete Task</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No tasks found.</p>
      )}
    </div>
  );
}

export default TaskList;
