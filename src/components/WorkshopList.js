import React from "react";

function WorkshopList() {
  return (
    <div className="card">
      <h2>Available Workshops</h2>
      <ul>
        <li>Workshop 1 - Date: 2024-10-15</li>
        <li>Workshop 2 - Date: 2024-11-10</li>
        {/* Add more workshop listings dynamically here */}
      </ul>
    </div>
  );
}

export default WorkshopList;
