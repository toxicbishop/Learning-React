import React from "react";

function Filter({ setFilter, currentFilter }) {
  return (
    <div className="filter-container">
      <button
        className={`filter-btn ${currentFilter === "all" ? "active" : ""}`}
        onClick={() => setFilter("all")}>
        All Tasks
      </button>
      <button
        className={`filter-btn ${currentFilter === "completed" ? "active" : ""}`}
        onClick={() => setFilter("completed")}>
        Completed
      </button>
      <button
        className={`filter-btn ${currentFilter === "not-completed" ? "active" : ""}`}
        onClick={() => setFilter("not-completed")}>
        Pending
      </button>
    </div>
  );
}

export default Filter;
