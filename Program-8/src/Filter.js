import React from "react";

function Filter({ setFilter }) {
  return (
    <div>
      <button onClick={() => setFilter("all")}>All Tasks</button>
      <button onClick={() => setFilter("completed")}>Completed Tasks</button>
      <button onClick={() => setFilter("not-completed")}>Pending Tasks</button>
    </div>
  );
}

export default Filter;
